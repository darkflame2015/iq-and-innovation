import Link from "next/link";
import Image from "next/image";
import { MailIcon, MapPinIcon, IndiaFlagIcon, ShieldCheckIcon } from "./Icons";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--foreground)",
        color: "rgba(255,255,255,0.72)",
        padding: "54px 20px 32px",
        marginTop: "auto",
        borderTop: "3px solid var(--primary)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
          gap: 36,
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <div
              style={{
                width: 44,
                height: 32,
                borderRadius: 6,
                overflow: "hidden",
                position: "relative",
                background: "white",
                padding: "2px 4px",
                flexShrink: 0,
              }}
            >
              <Image src="/logo.png" alt="IQ & INNOVATION" fill style={{ objectFit: "contain" }} sizes="44px" />
            </div>
            <h4
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "white",
                fontSize: "1.15rem",
                fontWeight: 700,
                letterSpacing: "0.01em",
              }}
            >
              IQ &amp; INNOVATION
            </h4>
          </div>
          <p style={{ fontSize: "0.86rem", lineHeight: 1.7, color: "rgba(255,255,255,0.65)" }}>
            An Indian deep-tech startup engineering intelligent automation, robotics, and next-generation IoT telemetry systems.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 16 }}>
            <IndiaFlagIcon size={20} />
            <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.8)", fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif" }}>
              Make in India Initiative
            </span>
          </div>
        </div>

        <div>
          <h5
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "white",
              fontSize: "0.98rem",
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            Product Lines
          </h5>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              fontSize: "0.88rem",
            }}
          >
            <li>
              <Link href="/product" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                ARGUS Series (Recon &amp; Utility)
              </Link>
            </li>
            <li>
              <Link href="/product" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                ASPER Series (Robotics &amp; AI)
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "white",
              fontSize: "0.98rem",
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            Quick Navigation
          </h5>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              fontSize: "0.88rem",
            }}
          >
            <li>
              <Link href="/founders" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                Leadership &amp; Team
              </Link>
            </li>
            <li>
              <Link href="/achievements" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                Awards &amp; Testimonials
              </Link>
            </li>
            <li>
              <Link href="/documents" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                Official Documents
              </Link>
            </li>
            <li>
              <Link href="/contact" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                Contact &amp; Quotation
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "white",
              fontSize: "0.98rem",
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            Communication
          </h5>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: "0.86rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <MailIcon size={16} color="var(--primary-light)" />
              <a href="mailto:punarbosupanja@gmail.com" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none" }}>
                punarbosupanja@gmail.com
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <MapPinIcon size={16} color="var(--accent-light)" />
              <span>India Operations</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <ShieldCheckIcon size={16} color="var(--primary-light)" />
              <span>Hardware &amp; IoT Innovation</span>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          borderTop: "1px solid rgba(255,255,255,0.12)",
          marginTop: 40,
          paddingTop: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          fontSize: "0.82rem",
        }}
      >
        <span>&copy; {new Date().getFullYear()} IQ &amp; INNOVATION. All rights reserved.</span>
        <span style={{ color: "rgba(255,255,255,0.5)" }}>
          Indigenous Robotics &amp; Automation
        </span>
      </div>
    </footer>
  );
}
