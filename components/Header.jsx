"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/partners", label: "Partners" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthReady(true);
    });
    return () => unsub();
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error("Sign-in error:", err);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setMenuOpen(false);
    } catch (err) {
      console.error("Sign-out error:", err);
    }
  };

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          <Image
            src="/assets/logos/brand-logo.png"
            alt="Tynixor"
            width={32}
            height={32}
          />
          Tynixor
        </Link>

        <nav className="nav-desktop">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {authReady && user ? (
            <Image
              src={user.photoURL || "/assets/icons/icon-191x192.png"}
              alt="Profile"
              width={34}
              height={34}
              className="profile-pic"
              style={{ display: "block", cursor: "pointer" }}
              onClick={() => setMenuOpen(true)}
            />
          ) : authReady ? (
            <button className="sign-in-btn" onClick={handleSignIn}>
              Sign in with Google
            </button>
          ) : null}

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>

        <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <button
            className="close-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
            {user && (
              <li>
                <a href="#" onClick={handleSignOut}>
                  Logout
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
