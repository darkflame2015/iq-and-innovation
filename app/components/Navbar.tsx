"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ArrowRightIcon } from "./Icons";

const navLinks = [
  { href: "/product", label: "Products" },
  { href: "/founders", label: "Founders" },
  { href: "/achievements", label: "Achievements" },
  { href: "/documents", label: "Documents" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile drawer on route change or resize
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(248, 255, 254, 0.9)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1.5px solid var(--border)",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
        }}
      >
        {/* Brand Logo & Name */}
        <Link
          href="/product"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
            color: "var(--foreground)",
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              overflow: "hidden",
              border: "1.5px solid var(--border)",
              position: "relative",
              flexShrink: 0,
            }}
          >
            <Image
              src="/logo.png"
              alt="IQ & Innovation"
              fill
              style={{ objectFit: "contain" }}
              sizes="40px"
              priority
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              IQ &amp; Innovation
            </span>
            <span
              style={{
                fontSize: "0.68rem",
                color: "var(--primary)",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Govt-Aligned Startup
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
          className="nav-desktop"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "8px 16px",
                  borderRadius: 10,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  textDecoration: "none",
                  color: isActive ? "var(--primary)" : "var(--text-secondary)",
                  background: isActive ? "var(--surface-alt)" : "transparent",
                  border: isActive
                    ? "1.5px solid var(--primary)"
                    : "1.5px solid transparent",
                  transition: "var(--transition)",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="btn-primary"
            style={{
              padding: "7px 16px",
              fontSize: "0.84rem",
              minHeight: 38,
              marginLeft: 8,
            }}
          >
            <span>Quote</span>
            <ArrowRightIcon size={14} color="#ffffff" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          style={{
            display: "none",
            background: "var(--surface-alt)",
            border: "1.5px solid var(--border)",
            borderRadius: 8,
            cursor: "pointer",
            padding: "8px 10px",
            color: "var(--foreground)",
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Dynamic Mobile dropdown */}
      {mobileOpen && (
        <div
          className="nav-mobile-menu"
          style={{
            padding: "16px 20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            background: "var(--surface)",
            borderTop: "1.5px solid var(--border)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  padding: "12px 16px",
                  borderRadius: 10,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  color: isActive ? "var(--primary)" : "var(--foreground)",
                  background: isActive ? "var(--surface-alt)" : "transparent",
                  border: isActive
                    ? "1.5px solid var(--primary)"
                    : "1.5px solid var(--border)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{link.label}</span>
                <ArrowRightIcon size={16} color={isActive ? "var(--primary)" : "var(--text-muted)"} />
              </Link>
            );
          })}
        </div>
      )}

      <style jsx global>{`
        @media (max-width: 820px) {
          .nav-desktop {
            display: none !important;
          }
          .nav-mobile-toggle {
            display: flex !important;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
    </nav>
  );
}
