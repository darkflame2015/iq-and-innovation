"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  TrophyIcon,
  MedalIcon,
  StarIcon,
  ClipboardIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "../components/Icons";

/* ─── Inline Special Icons ─── */
function GlobeIcon({ size = 20, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function DownloadIcon({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function PlayCircleIcon({ size = 20, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" fill={color} />
    </svg>
  );
}

function ZoomInIcon({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

function CloseIcon({ size = 24, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function AchievementsPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; caption: string } | null>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const conclaveImages = [
    { src: "/asper-exposure-1.jpeg", caption: "CSIR Conclave Presentation — Prototype Demonstration" },
    { src: "/asper-exposure-2.jpeg", caption: "Live Hardware Demonstration to Industry Experts" },
    { src: "/asper-exposure-3.jpeg", caption: "Scientific Panel & Technical Discussion" },
  ];


  const contracts = [
    {
      partner: "Smart Utility Pilot Initiative",
      type: "Pilot Deployment",
      description:
        "Smart meter deployment pilot across residential and commercial sub-grids with centralized telemetry monitoring.",
      status: "In Progress",
    },
    {
      partner: "Agricultural Research Consortium",
      type: "R&D Collaboration",
      description:
        "Joint research on automated drone-based multispectral yield assessment and precision pesticide spray algorithms.",
      status: "Active",
    },
    {
      partner: "Regional Utility & Water Management",
      type: "Pilot Deployment",
      description:
        "Implementation of autonomous water-body quality monitoring stations using the ARGUS aquatic robot series.",
      status: "In Progress",
    },
  ];

  return (
    <div style={{ minHeight: "80vh", width: "100%" }}>
      {/* ═══ Image Expansion Lightbox Modal ═══ */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(10, 26, 47, 0.88)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            animation: "fadeIn 0.25s ease-out",
          }}
        >
          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "92vw",
              maxHeight: "88vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "var(--surface)",
              border: "2px solid var(--foreground)",
              borderRadius: "16px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
              overflow: "hidden",
            }}
          >
            {/* Top Bar with Title and Close Button */}
            <div
              style={{
                width: "100%",
                padding: "12px 20px",
                background: "var(--surface-alt)",
                borderBottom: "1.5px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <span
                style={{
                  fontSize: "0.92rem",
                  fontWeight: 700,
                  color: "var(--foreground)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {selectedImage.caption}
              </span>
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close modal"
                style={{
                  background: "var(--surface)",
                  border: "1.5px solid var(--foreground)",
                  borderRadius: "8px",
                  cursor: "pointer",
                  padding: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--foreground)",
                  transition: "var(--transition)",
                }}
              >
                <CloseIcon size={20} />
              </button>
            </div>

            {/* Expanded Image Container */}
            <div
              style={{
                position: "relative",
                width: "min(86vw, 900px)",
                height: "min(74vh, 650px)",
                background: "#000000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.caption}
                fill
                style={{ objectFit: "contain" }}
                sizes="90vw"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* ═══ Hero ═══ */}
      <section
        className="dot-pattern hero-section"
        style={{
          padding: "60px 20px 48px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 740, margin: "0 auto" }}>
          <div className="badge animate-fade-in" style={{ display: "inline-flex", margin: "0 auto" }}>
            <TrophyIcon size={16} color="var(--primary)" />
            <span>Proven Track Record</span>
          </div>
          <h1
            className="animate-fade-in-up"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 3.4rem)",
              marginTop: 18,
              lineHeight: 1.15,
            }}
          >
            Milestones &amp; <span className="gradient-text">Achievements</span>
          </h1>
          <p
            className="animate-fade-in-up delay-100"
            style={{
              color: "var(--text-secondary)",
              fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
              marginTop: 16,
              lineHeight: 1.65,
              maxWidth: 620,
              margin: "16px auto 0",
            }}
          >
            International recognitions, competitive victories, scientific conclaves, and industry endorsements celebrating our technological breakthroughs.
          </p>
        </div>
      </section>

      <section className="section-wrapper" style={{ paddingTop: 10 }}>
        {/* ═══ Major Honors Showcase ═══ */}
        <div style={{ marginBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: "var(--primary)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid var(--foreground)",
                boxShadow: "var(--shadow-brutal-sm)",
              }}
            >
              <TrophyIcon size={22} color="#ffffff" />
            </div>
            <div>
              <h2 style={{ fontSize: "clamp(1.3rem, 3.5vw, 1.75rem)", fontWeight: 700, lineHeight: 1.2 }}>
                Major Honors &amp; Competitive Victories
              </h2>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: 2 }}>
                Key recognitions won on global and national stages (Click any photo to expand)
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {/* 1. Bengal E-Summit 2026 - 1st Prize */}
            <div
              className="card-brutal animate-fade-in-up"
              style={{
                padding: 0,
                overflow: "hidden",
                background: "var(--surface)",
              }}
            >
              <div style={{ height: 6, background: "linear-gradient(90deg, #d97706, #f59e0b)" }} />
              <div style={{ padding: "28px 24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                      <span
                        style={{
                          background: "#d97706",
                          color: "#ffffff",
                          padding: "4px 12px",
                          borderRadius: 999,
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          fontFamily: "'Space Grotesk', sans-serif",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          border: "1.5px solid var(--foreground)",
                        }}
                      >
                        <TrophyIcon size={14} color="#ffffff" />
                        1st Prize Champion
                      </span>
                      <span className="badge" style={{ fontSize: "0.75rem", padding: "4px 10px" }}>
                        Product: AsPER
                      </span>
                    </div>
                    <h3 style={{ fontSize: "clamp(1.2rem, 3vw, 1.5rem)", fontWeight: 700 }}>
                      1st Prize Winner — Bengal E-Summit 2026
                    </h3>
                  </div>
                  <span
                    style={{
                      background: "var(--surface-alt)",
                      border: "1px solid var(--border)",
                      padding: "6px 14px",
                      borderRadius: 8,
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    State Innovation Summit 2026
                  </span>
                </div>

                <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.7, marginBottom: 24, maxWidth: 880 }}>
                  <strong>AsPER</strong> secured the <strong>1st Prize</strong> at the prestigious <strong>Bengal E-Summit 2026</strong>. Our indigenous robotics and smart automation platform was lauded for its exceptional engineering architecture, real-world utility, and commercial feasibility.
                </p>

                {/* Media grid: Video + Trophy */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
                    gap: 20,
                  }}
                >
                  {/* Video Player (Muted by default) */}
                  <div
                    style={{
                      borderRadius: 12,
                      overflow: "hidden",
                      border: "2px solid var(--foreground)",
                      boxShadow: "var(--shadow-brutal-sm)",
                      background: "#000000",
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        padding: "8px 14px",
                        background: "var(--foreground)",
                        color: "#ffffff",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      <PlayCircleIcon size={16} color="#f59e0b" />
                      <span>Award Ceremony &amp; Video</span>
                    </div>
                    <video
                      controls
                      muted
                      playsInline
                      preload="metadata"
                      style={{
                        width: "100%",
                        height: 280,
                        objectFit: "contain",
                        backgroundColor: "#000000",
                      }}
                    >
                      <source src="/bengal-e-summit-video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  {/* Trophy Photo (Clickable to Expand) */}
                  <div
                    onClick={() =>
                      setSelectedImage({
                        src: "/bengal-e-summit-trophy.jpeg",
                        caption: "1st Prize Trophy — Bengal E-Summit 2026 (Awarded to AsPER)",
                      })
                    }
                    style={{
                      borderRadius: 12,
                      overflow: "hidden",
                      border: "2px solid var(--foreground)",
                      boxShadow: "var(--shadow-brutal-sm)",
                      background: "var(--surface-alt)",
                      display: "flex",
                      flexDirection: "column",
                      cursor: "pointer",
                      position: "relative",
                      transition: "var(--transition)",
                    }}
                    className="clickable-photo"
                  >
                    <div
                      style={{
                        padding: "8px 14px",
                        background: "var(--foreground)",
                        color: "#ffffff",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <TrophyIcon size={16} color="#f59e0b" />
                        <span>Official Trophy &amp; Accolade</span>
                      </div>
                      <span style={{ fontSize: "0.72rem", color: "#f59e0b", display: "flex", alignItems: "center", gap: 4 }}>
                        <ZoomInIcon size={13} /> Click to expand
                      </span>
                    </div>
                    <div style={{ position: "relative", width: "100%", height: 280 }}>
                      <Image
                        src="/bengal-e-summit-trophy.jpeg"
                        alt="Bengal E-Summit 1st Prize Trophy"
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, 500px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. IEEE YESIST12 Indonesia & 3. MAKAUT Event Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
                gap: 24,
              }}
            >
              {/* IEEE YESIST12 Indonesia Card */}
              <div
                className="card-brutal animate-fade-in-up delay-100"
                style={{
                  padding: 0,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  background: "var(--surface)",
                }}
              >
                <div style={{ height: 6, background: "linear-gradient(90deg, #1a5fa8, #38bdf8)" }} />
                <div style={{ padding: "26px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                    <span
                      style={{
                        background: "#1a5fa8",
                        color: "#ffffff",
                        padding: "4px 12px",
                        borderRadius: 999,
                        fontSize: "0.74rem",
                        fontWeight: 700,
                        fontFamily: "'Space Grotesk', sans-serif",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        border: "1.5px solid var(--foreground)",
                      }}
                    >
                      <GlobeIcon size={14} color="#ffffff" />
                      International Selection
                    </span>
                    <span className="badge" style={{ fontSize: "0.72rem", padding: "3px 8px" }}>
                      IEEE YESIST12
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 8, lineHeight: 1.25 }}>
                    Selected for IEEE YESIST12 International Finals — Indonesia
                  </h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.65, marginBottom: 20, flex: 1 }}>
                    <strong>AsPER</strong> has been selected for the globally renowned <strong>IEEE YESIST12 (Youth Endeavours for Social Innovation using Sustainable Technology)</strong> International Exposure Competition organized globally from <strong>Indonesia</strong>.
                  </p>

                  {/* Attached PDF Preview Card */}
                  <div
                    style={{
                      background: "var(--surface-alt)",
                      border: "1.5px solid var(--border)",
                      borderRadius: 12,
                      padding: "16px",
                      marginBottom: 16,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12,
                      flexWrap: "wrap",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: 8,
                          background: "#e11d48",
                          color: "#ffffff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                          fontSize: "0.75rem",
                          fontFamily: "'Space Grotesk', sans-serif",
                          flexShrink: 0,
                          border: "1.5px solid var(--foreground)",
                          boxShadow: "var(--shadow-brutal-sm)",
                        }}
                      >
                        PDF
                      </div>
                      <div>
                        <p style={{ fontWeight: 700, fontSize: "0.88rem", color: "var(--foreground)" }}>
                          IEEE Selection Letter
                        </p>
                        <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                          Official Global Qualification Document
                        </p>
                      </div>
                    </div>

                    <a
                      href="/international.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{
                        padding: "8px 16px",
                        fontSize: "0.8rem",
                        minHeight: 36,
                        gap: 6,
                      }}
                    >
                      <DownloadIcon size={14} color="var(--foreground)" />
                      <span>View PDF</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* MAKAUT & Bhartiya Bhasha Samiti Card (Clickable to Expand) */}
              <div
                className="card-brutal animate-fade-in-up delay-200"
                style={{
                  padding: 0,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  background: "var(--surface)",
                }}
              >
                <div style={{ height: 6, background: "linear-gradient(90deg, #0e7c6b, #10b981)" }} />
                <div style={{ padding: "26px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                    <span
                      style={{
                        background: "#0e7c6b",
                        color: "#ffffff",
                        padding: "4px 12px",
                        borderRadius: 999,
                        fontSize: "0.74rem",
                        fontWeight: 700,
                        fontFamily: "'Space Grotesk', sans-serif",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        border: "1.5px solid var(--foreground)",
                      }}
                    >
                      <MedalIcon size={14} color="#ffffff" />
                      3rd Position Award
                    </span>
                    <span className="badge" style={{ fontSize: "0.72rem", padding: "3px 8px" }}>
                      Product: ARGUS
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 8, lineHeight: 1.25 }}>
                    3rd Position — Bhartiya Bhasha Samiti &amp; MAKAUT Board
                  </h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.65, marginBottom: 16 }}>
                    <strong>ARGUS</strong> emerged as the <strong>3rd Position Winner</strong> in a state innovation event organized by the <strong>Bhartiya Bhasha Samiti</strong> in collaboration with the <strong>MAKAUT Board</strong>, recognized for excellence in hardware and regional language accessibility.
                  </p>

                  {/* Attached MAKAUT image */}
                  <div
                    onClick={() =>
                      setSelectedImage({
                        src: "/makaut.jpeg",
                        caption: "ARGUS Recognition — Bhartiya Bhasha Samiti & MAKAUT Board 3rd Position",
                      })
                    }
                    style={{
                      borderRadius: 12,
                      overflow: "hidden",
                      border: "2px solid var(--foreground)",
                      boxShadow: "var(--shadow-brutal-sm)",
                      position: "relative",
                      width: "100%",
                      height: 200,
                      marginTop: "auto",
                      background: "var(--surface-alt)",
                      cursor: "pointer",
                    }}
                    className="clickable-photo"
                  >
                    <Image
                      src="/makaut.jpeg"
                      alt="ARGUS - MAKAUT and Bhartiya Bhasha Samiti 3rd Position"
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 8,
                        right: 8,
                        background: "rgba(10, 26, 47, 0.85)",
                        color: "white",
                        padding: "4px 8px",
                        borderRadius: 6,
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      <ZoomInIcon size={12} /> Expand
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Bengal Rise Conclave in CSIR Gallery (Clickable to Expand) */}
            <div
              className="card-brutal animate-fade-in-up delay-300"
              style={{
                padding: 0,
                overflow: "hidden",
                background: "var(--surface)",
              }}
            >
              <div style={{ height: 6, background: "linear-gradient(90deg, #7c3aed, #a855f7)" }} />
              <div style={{ padding: "28px 24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                      <span
                        style={{
                          background: "#7c3aed",
                          color: "#ffffff",
                          padding: "4px 12px",
                          borderRadius: 999,
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          fontFamily: "'Space Grotesk', sans-serif",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          border: "1.5px solid var(--foreground)",
                        }}
                      >
                        <SparklesIcon size={14} color="#ffffff" />
                        Debut Scientific Exposure
                      </span>
                      <span className="badge" style={{ fontSize: "0.75rem", padding: "4px 10px" }}>
                        CSIR Research Hub
                      </span>
                    </div>
                    <h3 style={{ fontSize: "clamp(1.2rem, 3vw, 1.5rem)", fontWeight: 700 }}>
                      Our First Exposure at BENGAL RISE CONCLAVE in CSIR
                    </h3>
                  </div>
                  <span
                    style={{
                      background: "var(--surface-alt)",
                      border: "1px solid var(--border)",
                      padding: "6px 14px",
                      borderRadius: 8,
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    Council of Scientific &amp; Industrial Research
                  </span>
                </div>

                <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.7, marginBottom: 24, maxWidth: 880 }}>
                  <strong>AsPER</strong> marked its milestone debut scientific demonstration at the <strong>BENGAL RISE CONCLAVE</strong> hosted at <strong>CSIR</strong>. Our team presented working prototypes directly to premier industrial scientists, academic researchers, and innovation directors.
                </p>

                {/* 3-Image Showcase (Clickable to Expand) */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
                    gap: 16,
                  }}
                >
                  {conclaveImages.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() =>
                        setSelectedImage({
                          src: img.src,
                          caption: `Bengal Rise Conclave at CSIR: ${img.caption}`,
                        })
                      }
                      style={{
                        borderRadius: 12,
                        overflow: "hidden",
                        border: "2px solid var(--foreground)",
                        boxShadow: "var(--shadow-brutal-sm)",
                        background: "var(--surface-alt)",
                        display: "flex",
                        flexDirection: "column",
                        cursor: "pointer",
                        transition: "var(--transition)",
                      }}
                      className="clickable-photo"
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          height: 220,
                        }}
                      >
                        <Image
                          src={img.src}
                          alt={img.caption}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 768px) 100vw, 300px"
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: 8,
                            right: 8,
                            background: "rgba(10, 26, 47, 0.8)",
                            color: "white",
                            padding: "3px 8px",
                            borderRadius: 6,
                            fontSize: "0.68rem",
                            fontWeight: 600,
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                            backdropFilter: "blur(4px)",
                          }}
                        >
                          <ZoomInIcon size={12} /> Expand
                        </div>
                      </div>
                      <div
                        style={{
                          padding: "10px 14px",
                          background: "var(--surface)",
                          borderTop: "1.5px solid var(--border)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--foreground)" }}>
                          {img.caption}
                        </span>
                        <span
                          style={{
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            color: "var(--primary)",
                            fontFamily: "'Space Grotesk', sans-serif",
                          }}
                        >
                          0{idx + 1} / 03
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* ═══ Section 3: Contracts & Pilots ═══ */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: "var(--primary-dark)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid var(--foreground)",
                boxShadow: "var(--shadow-brutal-sm)",
              }}
            >
              <ClipboardIcon size={20} color="#ffffff" />
            </div>
            <h2 style={{ fontSize: "clamp(1.25rem, 3.5vw, 1.6rem)", fontWeight: 700 }}>
              Active Contracts &amp; Pilots
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
              gap: 20,
            }}
          >
            {contracts.map((c, i) => (
              <div
                key={c.partner}
                className={`card-brutal animate-fade-in-up delay-${(i + 1) * 100}`}
                style={{ padding: "24px 26px" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 12,
                    gap: 10,
                    flexWrap: "wrap",
                  }}
                >
                  <h4 style={{ fontSize: "1.08rem", fontWeight: 700, flex: "1 1 180px" }}>{c.partner}</h4>
                  <span
                    style={{
                      background: "var(--primary)",
                      color: "white",
                      padding: "4px 10px",
                      borderRadius: 6,
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      fontFamily: "'Space Grotesk', sans-serif",
                      border: "1.5px solid var(--foreground)",
                    }}
                  >
                    {c.status}
                  </span>
                </div>
                <div className="badge" style={{ marginBottom: 12, fontSize: "0.74rem" }}>
                  <ShieldCheckIcon size={14} color="var(--primary)" />
                  <span>{c.type}</span>
                </div>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.86rem",
                    lineHeight: 1.65,
                    marginTop: 6,
                  }}
                >
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global styles for clickable photo hover effect */}
      <style jsx global>{`
        .clickable-photo:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-brutal-hover) !important;
        }
      `}</style>
    </div>
  );
}
