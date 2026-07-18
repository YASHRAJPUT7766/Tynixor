"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", description: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await addDoc(collection(db, "contactMessages"), {
        ...form,
        createdAt: serverTimestamp(),
      });
      setStatus("sent");
      setForm({ name: "", email: "", description: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <main className="static-page">
      <h1>Contact Us</h1>
      <p className="updated">We'd love to hear from you.</p>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 480 }}
      >
        <div>
          <label style={{ display: "block", fontSize: 13.5, fontWeight: 600, marginBottom: 6 }}>
            Name
          </label>
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={{ display: "block", fontSize: 13.5, fontWeight: 600, marginBottom: 6 }}>
            Email
          </label>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={{ display: "block", fontSize: 13.5, fontWeight: 600, marginBottom: 6 }}>
            Message
          </label>
          <textarea
            required
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={5}
            style={{ ...inputStyle, resize: "vertical" }}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        {status === "sent" && (
          <p style={{ color: "#16a34a", fontSize: 14 }}>Message sent — thank you!</p>
        )}
        {status === "error" && (
          <p style={{ color: "#dc2626", fontSize: 14 }}>
            Something went wrong. Please email us directly at{" "}
            <a href="mailto:yash92726@gmail.com">yash92726@gmail.com</a>.
          </p>
        )}
      </form>

      <p style={{ marginTop: 32, fontSize: 14, color: "var(--text-mid)" }}>
        Prefer email? Reach us directly at{" "}
        <a href="mailto:yash92726@gmail.com">yash92726@gmail.com</a>
      </p>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 8,
  border: "1px solid var(--border)",
  fontSize: 14.5,
  fontFamily: "inherit",
  background: "#fff",
};
