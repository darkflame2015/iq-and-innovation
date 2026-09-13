"use client";

import { useState } from "react";
import {
  MailIcon,
  MapPinIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  IndiaFlagIcon,
} from "../components/Icons";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    product: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", subject: "", product: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "13px 15px",
    borderRadius: 10,
    border: "2px solid var(--border)",
    background: "var(--surface)",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.92rem",
    color: "var(--foreground)",
    outline: "none",
    transition: "var(--transition)",
  };

  return (
    <div style={{ minHeight: "80vh", width: "100%" }}>
      {/* Hero */}
      <section
        className="dot-pattern hero-section"
        style={{
          padding: "60px 20px 48px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 740, margin: "0 auto" }}>
          <div className="badge animate-fade-in" style={{ display: "inline-flex", margin: "0 auto" }}>
            <MailIcon size={16} color="var(--primary)" />
            <span>Direct Inquiries &amp; Quotations</span>
          </div>
          <h1
            className="animate-fade-in-up"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 3.4rem)",
              marginTop: 18,
              lineHeight: 1.15,
            }}
          >
            Get in Touch with <span className="gradient-text">Our Team</span>
          </h1>
          <p
            className="animate-fade-in-up delay-100"
            style={{
              color: "var(--text-secondary)",
              fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
              marginTop: 16,
              lineHeight: 1.65,
              maxWidth: 640,
              margin: "16px auto 0",
            }}
          >
            Have a project requirement, product inquiry, or quotation request?
            Our engineering team is ready to assist you.
          </p>
        </div>
      </section>

      <section className="section-wrapper" style={{ paddingTop: 10 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: 32,
            maxWidth: 1040,
            margin: "0 auto",
          }}
        >
          {/* Form Card */}
          <div className="card-brutal animate-fade-in-up" style={{ padding: "clamp(20px, 4vw, 36px)" }}>
            <h2
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                marginBottom: 24,
                color: "var(--foreground)",
              }}
            >
              Send an Official Inquiry
            </h2>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label
                  htmlFor="name"
                  style={{
                    display: "block",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    marginBottom: 6,
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: "var(--text-secondary)",
                  }}
                >
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))", gap: 14 }}>
                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      marginBottom: 6,
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: "var(--text-secondary)",
                    }}
                  >
                    Official Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      marginBottom: 6,
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: "var(--text-secondary)",
                    }}
                  >
                    Contact Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="product"
                  style={{
                    display: "block",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    marginBottom: 6,
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: "var(--text-secondary)",
                  }}
                >
                  Product / Solution of Interest
                </label>
                <select
                  id="product"
                  name="product"
                  value={form.product}
                  onChange={handleChange}
                  style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                >
                  <option value="">Select a product (optional)</option>
                  <optgroup label="ARGUS Series">
                    <option value="ARGUS Smart Meter">ARGUS Smart Meter</option>
                    <option value="ARGUS Drone">ARGUS Drone</option>
                    <option value="ARGUS SentinelBot">ARGUS SentinelBot</option>
                    <option value="ARGUS AquaBot">ARGUS AquaBot</option>
                  </optgroup>
                  <optgroup label="ASPER Series">
                    <option value="ASPER MediBot">ASPER MediBot</option>
                    <option value="ASPER AgriBot">ASPER AgriBot</option>
                    <option value="ASPER EduBot">ASPER EduBot</option>
                    <option value="ASPER CleanBot">ASPER CleanBot</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  style={{
                    display: "block",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    marginBottom: 6,
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: "var(--text-secondary)",
                  }}
                >
                  Subject *
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="e.g., Quotation Request for Smart Meters"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: "block",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    marginBottom: 6,
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: "var(--text-secondary)",
                  }}
                >
                  Requirements &amp; Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Provide details about volume, site location, timeline..."
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                    minHeight: 110,
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                disabled={status === "loading"}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  marginTop: 6,
                  opacity: status === "loading" ? 0.75 : 1,
                }}
              >
                <span>{status === "loading" ? "Transmitting Inquiry..." : "Submit Inquiry"}</span>
                {status !== "loading" && <ArrowRightIcon size={18} color="#ffffff" />}
              </button>

              {status === "success" && (
                <div
                  style={{
                    padding: "14px 18px",
                    borderRadius: 10,
                    background: "#ecfdf5",
                    border: "1.5px solid #10b981",
                    color: "#065f46",
                    fontSize: "0.88rem",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <CheckCircleIcon size={20} color="#10b981" />
                  <span>Inquiry sent successfully! Our executive will contact you shortly.</span>
                </div>
              )}

              {status === "error" && (
                <div
                  style={{
                    padding: "14px 18px",
                    borderRadius: 10,
                    background: "#fef2f2",
                    border: "1.5px solid #ef4444",
                    color: "#991b1b",
                    fontSize: "0.88rem",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <AlertCircleIcon size={20} color="#ef4444" />
                  <span>{errorMsg}</span>
                </div>
              )}
            </form>
          </div>

          {/* Contact Details & SLA */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div className="card-bento" style={{ padding: "24px 26px" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 16 }}>
                Direct Communication
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                }}
              >
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "var(--surface-alt)",
                      border: "1.5px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <MailIcon size={18} color="var(--primary)" />
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, color: "var(--foreground)", fontSize: "0.86rem" }}>
                      Executive Email
                    </p>
                    <a
                      href="mailto:punarbosupanja@gmail.com"
                      style={{ color: "var(--primary)", textDecoration: "none", wordBreak: "break-all" }}
                    >
                      punarbosupanja@gmail.com
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "var(--surface-alt)",
                      border: "1.5px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <MapPinIcon size={18} color="var(--accent)" />
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, color: "var(--foreground)", fontSize: "0.86rem" }}>
                      Headquarters &amp; Operations
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 2 }}>
                      <IndiaFlagIcon size={16} />
                      <span>India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-brutal" style={{ padding: "24px 26px", background: "var(--surface-alt)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <SparklesIcon size={18} color="var(--primary)" />
                <h3 style={{ fontSize: "1.08rem", fontWeight: 700 }}>
                  Custom Quotation SLA
                </h3>
              </div>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.86rem",
                  lineHeight: 1.65,
                }}
              >
                For custom volume deployments across municipal or enterprise sectors, include your specifications for a comprehensive technical and commercial proposal within 2–3 business days.
              </p>
            </div>

            <div className="card-bento" style={{ padding: "24px 26px" }}>
              <h3 style={{ fontSize: "1.08rem", fontWeight: 700, marginBottom: 12 }}>
                Estimated Response Timeline
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
                  gap: 10,
                }}
              >
                {[
                  { label: "General Query", time: "24 Hours" },
                  { label: "Price Quote", time: "2–3 Days" },
                  { label: "Tech Support", time: "48 Hours" },
                  { label: "Custom Solution", time: "Priority" },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      padding: "10px 12px",
                      background: "var(--surface-alt)",
                      borderRadius: 8,
                      border: "1.5px solid var(--border)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.7rem",
                        color: "var(--text-muted)",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontSize: "0.88rem",
                        fontWeight: 700,
                        marginTop: 2,
                        fontFamily: "'Space Grotesk', sans-serif",
                        color: "var(--primary)",
                      }}
                    >
                      {item.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
