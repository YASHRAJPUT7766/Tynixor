"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function PartnersPage() {
  const [form, setForm] = useState({ name: "", business: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await addDoc(collection(db, "partnerRequests"), {
        ...form,
        createdAt: serverTimestamp(),
      });
      setStatus("sent");
      setForm({ name: "", business: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <main className="static-page">
      <h1>Our Partners</h1>
      <p className="updated">No partners yet — become one by filling the form below!</p>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 480 }}
      >
        <div>
          <label style={labelStyle}>Your Name</label>
          <input required name="name" value={form.name} onChange={handleChange} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Business Name</label>
          <input required name="business" value={form.business} onChange={handleChange} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input required type="email" name="email" value={form.email} onChange={handleChange} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Message</label>
          <textarea required name="message" value={form.message} onChange={handleChange} rows={5} style={{ ...inputStyle, resize: "vertical" }} />
        </div>
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Submit Partnership Request"}
        </button>
        {status === "sent" && <p style={{ color: "#16a34a", fontSize: 14 }}>Request sent — we'll be in touch!</p>}
        {status === "error" && (
          <p style={{ color: "#dc2626", fontSize: 14 }}>
            Something went wrong. Please email us at <a href="mailto:yash92726@gmail.com">yash92726@gmail.com</a>.
          </p>
        )}
      </form>
    </main>
  );
}

const labelStyle = { display: "block", fontSize: 13.5, fontWeight: 600, marginBottom: 6 };
const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 8,
  border: "1px solid var(--border)",
  fontSize: 14.5,
  fontFamily: "inherit",
  background: "#fff",
};
