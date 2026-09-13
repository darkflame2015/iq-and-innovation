"use client";

import Image from "next/image";
import { useState } from "react";
import {
  TrophyIcon,
  MedalIcon,
  RocketIcon,
  PatentIcon,
  EducationIcon,
  StarIcon,
  ClipboardIcon,
  ShieldCheckIcon,
  SparklesIcon,
  FileTextIcon,
  ArrowRightIcon,
  CheckCircleIcon,
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

export default function AchievementsPage() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const conclaveImages = [
    { src: "/asper-exposure-1.jpeg", caption: "CSIR Conclave Presentation" },
    { src: "/asper-exposure-2.jpeg", caption: "Live Hardware Demonstration" },
    { src: "/asper-exposure-3.jpeg", caption: "Scientific Panel Discussion" },
  ];

  const alumnis = [
    {
      name: "Rishab Sen",
      role: "Former Intern — Now at ISRO",
      note: "Contributed to the ARGUS Drone flight stabilization and autonomous path planning subsystem.",
    },
    {
      name: "Priya Mukherjee",
      role: "Former Intern — Now at TCS Research",
      note: "Built foundational machine learning algorithms for real-time electrical grid anomaly detection.",
    },
    {
      name: "Sourav Das",
      role: "Former Contributor — Now at Wipro Robotics",
      note: "Engineered the mechanical chassis and UV dispersion unit for ASPER CleanBot prototype.",
    },
  ];

  const reviews = [
    {
      name: "Dr. Anil Sharma",
      designation: "Director, Municipal Smart Grid Division",
      review:
        "IQ & INNOVATION's smart metering platform demonstrated remarkable precision and telemetry uptime in our pilot evaluations. A breakthrough for municipal digitization.",
      rating: 5,
    },
    {
      name: "Prof. Meera Nair",
      designation: "Head of Robotics, IIT Hub",
      review:
        "The engineering rigor displayed in the ARGUS drone and ground robotic platforms is truly commendable. High precision, robust build, and indigenous innovation.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      designation: "CTO, AgroTech Systems",
      review:
        "The ASPER AgriBot multispectral scanning capabilities and automated mapping have exceeded our expectations for localized crop health monitoring.",
      rating: 5,
    },
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
        {/* ═══ Top Key Milestones Showcase ═══ */}
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
                Key recognitions won on global and national stages
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
                  {/* Video Player */}
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
                      <span>Award Ceremony &amp; Demo Video</span>
                    </div>
                    <video
                      controls
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

                  {/* Trophy Photo */}
                  <div
                    style={{
                      borderRadius: 12,
                      overflow: "hidden",
                      border: "2px solid var(--foreground)",
                      boxShadow: "var(--shadow-brutal-sm)",
                      background: "var(--surface-alt)",
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
                      <TrophyIcon size={16} color="#f59e0b" />
                      <span>Official Trophy &amp; Accolade</span>
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

              {/* MAKAUT & Bhartiya Bhasha Samiti Card */}
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
                    }}
                  >
                    <Image
                      src="/makaut.jpeg"
                      alt="ARGUS - MAKAUT and Bhartiya Bhasha Samiti 3rd Position"
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Bengal Rise Conclave in CSIR Gallery */}
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

                {/* 3-Image Showcase */}
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
                      style={{
                        borderRadius: 12,
                        overflow: "hidden",
                        border: "2px solid var(--foreground)",
                        boxShadow: "var(--shadow-brutal-sm)",
                        background: "var(--surface-alt)",
                        display: "flex",
                        flexDirection: "column",
                      }}
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

        {/* ═══ Section 2: Notable Alumni ═══ */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: "var(--accent)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid var(--foreground)",
                boxShadow: "var(--shadow-brutal-sm)",
              }}
            >
              <EducationIcon size={20} color="#ffffff" />
            </div>
            <h2 style={{ fontSize: "clamp(1.25rem, 3.5vw, 1.6rem)", fontWeight: 700 }}>
              Notable Alumni &amp; Contributors
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
              gap: 20,
            }}
          >
            {alumnis.map((a, i) => (
              <div
                key={a.name}
                className={`card-brutal animate-fade-in-up delay-${(i + 1) * 100}`}
                style={{ padding: "22px 24px" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "var(--accent)",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      fontFamily: "'Space Grotesk', sans-serif",
                      border: "2px solid var(--foreground)",
                    }}
                  >
                    {a.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.05rem", fontWeight: 700 }}>{a.name}</h4>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--primary)",
                        fontWeight: 600,
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      {a.role}
                    </p>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "0.86rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                  }}
                >
                  {a.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ Section 3: Reviews & Endorsements ═══ */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div
              style={{
                width: 38,
                height: 38,
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
              <StarIcon size={20} color="#ffffff" fill="#ffffff" />
            </div>
            <h2 style={{ fontSize: "clamp(1.25rem, 3.5vw, 1.6rem)", fontWeight: 700 }}>
              Endorsements &amp; Reviews
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
              gap: 20,
            }}
          >
            {reviews.map((r, i) => (
              <div
                key={r.name}
                className={`card-glass animate-fade-in-up delay-${(i + 1) * 100}`}
                style={{ padding: "26px", display: "flex", flexDirection: "column" }}
              >
                <div style={{ display: "flex", gap: 4, marginBottom: 14 }}>
                  {[...Array(r.rating)].map((_, idx) => (
                    <StarIcon key={idx} size={18} color="#FF9933" fill="#FF9933" />
                  ))}
                </div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    color: "var(--text-secondary)",
                    fontStyle: "italic",
                    marginBottom: 20,
                    flex: 1,
                  }}
                >
                  &ldquo;{r.review}&rdquo;
                </p>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: 14 }}>
                  <p style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--foreground)" }}>{r.name}</p>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                      marginTop: 2,
                    }}
                  >
                    {r.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ Section 4: Contracts & Pilots ═══ */}
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
    </div>
  );
}
