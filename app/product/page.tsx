"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  IndiaFlagIcon,
  BoltIcon,
  DroneIcon,
  BotIcon,
  AquaBotIcon,
  MedicalIcon,
  AgricultureIcon,
  EducationIcon,
  CleanBotIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ShieldCheckIcon,
  BuildingIcon,
  SparklesIcon,
} from "../components/Icons";

type SeriesKey = "argus" | "asper";

interface ProductItem {
  name: string;
  description: string;
  icon: (props: { size?: number; color?: string }) => React.ReactNode;
}

const productData: Record<
  SeriesKey,
  {
    name: string;
    tagline: string;
    image: string;
    products: ProductItem[];
  }
> = {
  argus: {
    name: "ARGUS",
    tagline: "Advanced Reconnaissance & Guardian Utility Systems",
    image: "/argus.jpeg",
    products: [
      {
        name: "ARGUS Smart Meter",
        description:
          "Next-gen IoT-enabled smart metering solution for precise energy monitoring, analytics, and automated billing — designed for Indian municipal and industrial infrastructure.",
        icon: (props) => <BoltIcon size={props.size || 24} color={props.color || "var(--primary)"} />,
      },
      {
        name: "ARGUS Drone",
        description:
          "Autonomous aerial surveillance and inspection drone with AI-powered object detection, ideal for agriculture, infrastructure monitoring, and perimeter security.",
        icon: (props) => <DroneIcon size={props.size || 24} color={props.color || "var(--accent)"} />,
      },
      {
        name: "ARGUS SentinelBot",
        description:
          "Compact ground patrol robot equipped with real-time threat assessment, night-vision, and automated perimeter security for critical installations.",
        icon: (props) => <BotIcon size={props.size || 24} color={props.color || "var(--primary)"} />,
      },
      {
        name: "ARGUS AquaBot",
        description:
          "Submersible water-quality monitoring robot for real-time analysis of pH, turbidity, and contaminants in reservoirs and municipal water supply.",
        icon: (props) => <AquaBotIcon size={props.size || 24} color={props.color || "var(--accent)"} />,
      },
    ],
  },
  asper: {
    name: "ASPER",
    tagline: "Adaptive Smart Platform for Engineering & Robotics",
    image: "/asper.jpeg",
    products: [
      {
        name: "ASPER MediBot",
        description:
          "Healthcare delivery robot for hospitals — autonomous medicine delivery, patient vitals tracking, and sterile environment navigation.",
        icon: (props) => <MedicalIcon size={props.size || 24} color={props.color || "#0e7c6b"} />,
      },
      {
        name: "ASPER AgriBot",
        description:
          "Precision agriculture robot with soil analysis, automated seeding, and crop health monitoring using multispectral imaging.",
        icon: (props) => <AgricultureIcon size={props.size || 24} color={props.color || "#138808"} />,
      },
      {
        name: "ASPER EduBot",
        description:
          "Interactive educational companion robot for STEM learning, programmable by students via a visual block-coding interface.",
        icon: (props) => <EducationIcon size={props.size || 24} color={props.color || "var(--accent)"} />,
      },
      {
        name: "ASPER CleanBot",
        description:
          "Autonomous sanitation and cleaning robot for public spaces, equipped with UV sterilization and smart waste sorting.",
        icon: (props) => <CleanBotIcon size={props.size || 24} color={props.color || "#0e7c6b"} />,
      },
    ],
  },
};

export default function ProductPage() {
  const [selectedSeries, setSelectedSeries] = useState<SeriesKey | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const series = selectedSeries ? productData[selectedSeries] : null;
  const product = series?.products.find((p) => p.name === selectedProduct);

  return (
    <div style={{ minHeight: "80vh", width: "100%" }}>
      {/* Hero Section */}
      <section
        className="dot-pattern hero-section"
        style={{
          padding: "60px 20px 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: 840, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div className="badge animate-fade-in" style={{ display: "inline-flex", margin: "0 auto" }}>
            <IndiaFlagIcon size={18} />
            <span>Autonomous &amp; Smart Systems</span>
          </div>
          <h1
            className="animate-fade-in-up"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 3.4rem)",
              marginTop: 18,
              lineHeight: 1.15,
              fontWeight: 700,
            }}
          >
            Intelligent Robotics &amp; <span className="gradient-text">Product Ecosystem</span>
          </h1>
          <p
            className="animate-fade-in-up delay-100"
            style={{
              color: "var(--text-secondary)",
              fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
              marginTop: 16,
              lineHeight: 1.65,
              maxWidth: 680,
              margin: "16px auto 0",
            }}
          >
            Explore our state-of-the-art series engineered for mission-critical infrastructure, smart cities, and public utilities.
          </p>
        </div>
      </section>

      {/* Series Selection Grid */}
      {!selectedSeries && (
        <section className="section-wrapper" style={{ paddingTop: 10 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
              gap: 28,
              maxWidth: 960,
              margin: "0 auto",
            }}
          >
            {(Object.keys(productData) as SeriesKey[]).map((key, idx) => {
              const s = productData[key];
              return (
                <button
                  key={key}
                  onClick={() => setSelectedSeries(key)}
                  className={`card-brutal animate-fade-in-up ${idx === 0 ? "delay-100" : "delay-200"}`}
                  style={{
                    cursor: "pointer",
                    padding: 0,
                    overflow: "hidden",
                    textAlign: "left",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: 230,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      priority
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(10,26,47,0.75) 0%, rgba(10,26,47,0.1) 60%, transparent 100%)",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: 14,
                        right: 14,
                        background: "var(--primary)",
                        color: "white",
                        padding: "5px 12px",
                        borderRadius: 8,
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        fontFamily: "'Space Grotesk', sans-serif",
                        letterSpacing: "0.04em",
                        border: "1.5px solid var(--foreground)",
                        boxShadow: "2px 2px 0px var(--foreground)",
                      }}
                    >
                      {s.products.length} PRODUCTS
                    </span>
                  </div>
                  <div style={{ padding: "22px 24px 26px", display: "flex", flexDirection: "column", flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <h3
                        style={{
                          fontSize: "1.45rem",
                          fontWeight: 700,
                          letterSpacing: "0.02em",
                        }}
                      >
                        {s.name} Series
                      </h3>
                    </div>
                    <p
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "0.9rem",
                        marginTop: 8,
                        lineHeight: 1.6,
                        flex: 1,
                      }}
                    >
                      {s.tagline}
                    </p>
                    <div
                      style={{
                        marginTop: 20,
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        color: "var(--primary)",
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.92rem",
                      }}
                    >
                      <span>Explore {s.name} Products</span>
                      <ArrowRightIcon size={18} color="var(--primary)" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* Series Product Cards */}
      {selectedSeries && series && !selectedProduct && (
        <section className="section-wrapper" style={{ paddingTop: 10 }}>
          <div style={{ marginBottom: 28 }}>
            <button
              onClick={() => setSelectedSeries(null)}
              className="btn-secondary animate-fade-in"
              style={{ padding: "10px 18px", width: "auto" }}
            >
              <ArrowLeftIcon size={18} />
              <span>Back to All Series</span>
            </button>
          </div>

          <div
            className="card-glass animate-fade-in-up"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              padding: "20px 24px",
              marginBottom: 36,
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: 14,
                overflow: "hidden",
                border: "2px solid var(--foreground)",
                boxShadow: "var(--shadow-brutal-sm)",
                flexShrink: 0,
                position: "relative",
              }}
            >
              <Image
                src={series.image}
                alt={series.name}
                fill
                style={{ objectFit: "cover" }}
                sizes="60px"
              />
            </div>
            <div>
              <h2 style={{ fontSize: "clamp(1.4rem, 3.5vw, 1.85rem)", fontWeight: 700 }}>
                {series.name} <span style={{ color: "var(--primary)", fontWeight: 500 }}>Series</span>
              </h2>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  marginTop: 2,
                }}
              >
                {series.tagline}
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
              gap: 22,
            }}
          >
            {series.products.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setSelectedProduct(p.name)}
                className={`card-bento animate-fade-in-up delay-${(i + 1) * 100}`}
                style={{
                  cursor: "pointer",
                  padding: "24px",
                  textAlign: "left",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 12,
                      background: "var(--surface-alt)",
                      border: "1.5px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 18,
                    }}
                  >
                    {p.icon({ size: 26 })}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.12rem",
                      fontWeight: 700,
                      marginBottom: 8,
                      color: "var(--foreground)",
                    }}
                  >
                    {p.name}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.86rem",
                      lineHeight: 1.65,
                    }}
                  >
                    {p.description}
                  </p>
                </div>
                <div
                  style={{
                    marginTop: 22,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    color: "var(--primary)",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  <span>View Specifications</span>
                  <ArrowRightIcon size={16} color="var(--primary)" />
                </div>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Product Detail Modal / View */}
      {selectedProduct && product && series && (
        <section className="section-wrapper" style={{ paddingTop: 10 }}>
          <div style={{ marginBottom: 28 }}>
            <button
              onClick={() => setSelectedProduct(null)}
              className="btn-secondary animate-fade-in"
              style={{ padding: "10px 18px", width: "auto" }}
            >
              <ArrowLeftIcon size={18} />
              <span>Back to {series.name} Series</span>
            </button>
          </div>

          <div
            className="card-brutal animate-scale-in"
            style={{
              maxWidth: 760,
              margin: "0 auto",
              padding: 0,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "36px 24px 28px",
                background: "var(--surface-alt)",
                textAlign: "center",
                borderBottom: "2px solid var(--foreground)",
              }}
            >
              <div
                style={{
                  width: 76,
                  height: 76,
                  borderRadius: 18,
                  background: "var(--surface)",
                  border: "2px solid var(--foreground)",
                  boxShadow: "var(--shadow-brutal-sm)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                }}
              >
                {product.icon({ size: 38, color: "var(--primary)" })}
              </div>
              <div className="badge" style={{ marginBottom: 12, margin: "0 auto 12px" }}>
                <SparklesIcon size={14} color="var(--primary)" />
                <span>{series.name} Flagship Series</span>
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.1rem)",
                  fontWeight: 700,
                  marginTop: 8,
                }}
              >
                {product.name}
              </h2>
            </div>

            <div style={{ padding: "30px 24px 36px" }}>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.98rem",
                  lineHeight: 1.8,
                  marginBottom: 28,
                }}
              >
                {product.description}
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                  gap: 12,
                  marginBottom: 32,
                }}
              >
                {[
                  { label: "Series", value: series.name, icon: <SparklesIcon size={16} color="var(--primary)" /> },
                  { label: "Origin", value: "Make in India", icon: <IndiaFlagIcon size={16} /> },
                  { label: "Standard", value: "Industrial Grade", icon: <ShieldCheckIcon size={16} color="var(--primary)" /> },
                  { label: "Deployment", value: "Commercial & Utility", icon: <BuildingIcon size={16} color="var(--accent)" /> },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      padding: "12px 14px",
                      background: "var(--surface-alt)",
                      borderRadius: 10,
                      border: "1.5px solid var(--border)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 4,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      {item.icon}
                      <span
                        style={{
                          fontSize: "0.72rem",
                          color: "var(--text-muted)",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          fontFamily: "'Space Grotesk', sans-serif",
                        }}
                      >
                        {item.label}
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        fontFamily: "'Space Grotesk', sans-serif",
                        color: "var(--foreground)",
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 14,
                  flexWrap: "wrap",
                }}
              >
                <Link
                  href="/contact"
                  className="btn-primary"
                  style={{ flex: "1 1 200px" }}
                >
                  <span>Request Price Quotation</span>
                  <ArrowRightIcon size={18} color="#ffffff" />
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary"
                  style={{ flex: "1 1 180px" }}
                >
                  <span>Contact Sales Team</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
