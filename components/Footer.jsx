import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Tynixor</h4>
            <p style={{ fontSize: 13.5, color: "var(--text-mid)", marginBottom: 14 }}>
              Empowering the next generation of creators and leaders.
            </p>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/tynixor?igsh=YjAzZWxtbzlqNWpu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/assets/logos/instagram-icon.png" alt="Instagram" width={22} height={22} />
              </a>
              <a
                href="https://youtube.com/@prime_tv99?si=lg6D_PB4n3wgUaMC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/assets/logos/youtube-icon.png" alt="YouTube" width={22} height={22} />
              </a>
              <a href="https://t.me/THErealp4x" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/logos/telegram-icon.png" alt="Telegram" width={22} height={22} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link href="/about">About</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/partners">Partners</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/disclaimer">Disclaimer</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Tynixor. All rights reserved. | Ignite Your Potential</p>
        </div>
      </div>
    </footer>
  );
}
