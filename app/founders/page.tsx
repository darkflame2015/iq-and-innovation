import Image from "next/image";
import { UsersIcon, SparklesIcon, ShieldCheckIcon } from "../components/Icons";

/* ─── Inline SVG icons ─── */
function CrownIcon({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20" /><path d="M4 20V9l4 3 4-7 4 7 4-3v11" />
    </svg>
  );
}

function StarIcon({ size = 14, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="1.5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

/* ─── Data ─── */
const founder = {
  name: "Punarbosu Panja",
  role: "Founder & CEO",
  photo: "/punarbosu-panja.jpeg",
  color: "#0e7c6b",
  bio: "The Founder of IQ AND INNOVATION started this initiative as a one-person mission and currently works on the Tech with his team on both Hardware and Software. He spearheads core product architecture, R&D strategy, and technology partnerships.",
  expertise: ["Robotics Engineering", "IoT Systems", "Product Strategy", "Venture Leadership"],

};

const coFounders = [
  {
    name: "Richi Paul",
    role: "Co-Founder & Hardware Lead",
    department: "Hardware",
    photo: "/richi-paul.jpeg",
    color: "#d97706",
    bio: "The Co-Founder of IQ AND INNOVATION and the Core Team Leader for the Hardware Part specializing in IoT, Electronics, Electrical engineering, and leading hardware prototyping across all active projects.",
    expertise: ["IoT Systems", "Electronics", "Electrical Engineering", "Hardware Prototyping"],
  },
  {
    name: "Shreyasi Samui",
    role: "Co-Founder & Software Engineer",
    department: "Software",
    photo: "/shreyasi-samui.jpeg",
    color: "#7c3aed",
    bio: "The Co-Founder of IQ AND INNOVATION and a Core Member of the Software team  working on Raspberry Pi to build software servers and connection infrastructure for edge computing solutions.",
    expertise: ["Raspberry Pi", "Server Architecture", "Edge Computing", "Software Development"],
  },
];

const members = [
  {
    name: "Sagnik Datta",
    role: "Webmaster & Software Engineer",
    department: "Software",
    photo: "/sagnik-datta.jpeg",
    avatar: "SD",
    color: "#1a5fa8",
    bio: "The Webmaster of IQ AND INNOVATION manages the website and works on AI/ML Solutions, Blockchain, Full Stack Development, and handles calling & mailing communications.",
    expertise: ["AI/ML", "Blockchain", "Full Stack Dev", "Web Development"],
  },
  {
    name: "Titli Panja",
    role: "Software Engineer — Edge Systems",
    department: "Software",
    photo: "/titli-panja.jpeg",
    color: "#0891b2",
    bio: "Currently works on NVIDIA Jetson Nano for building low-cost servers and connection infrastructure for small industrial farms bringing AI-powered edge solutions to rural industry.",
    expertise: ["NVIDIA Jetson Nano", "Edge Servers", "Industrial IoT", "Embedded Systems"],
  },
  {
    name: "Ahana Haldar",
    role: "Software Engineer",
    department: "Software",
    photo: "/ahana-haldar.jpeg",
    avatar: "AH",
    color: "#059669",
    bio: "Developed the software and coding architecture in building the radio station.",
    expertise: ["Software Development", "System Coding", "Radio Systems", "Software Architecture"],
  },
  {
    name: "Tapas Dutta",
    role: "Hardware Engineer",
    department: "Hardware",
    photo: "/tapas-dutta.jpeg",
    avatar: "TD",
    color: "#ea580c",
    bio: "Engineered the hardware architecture and electrical connections in building the radio station.",
    expertise: ["Hardware Engineering", "Circuit Design", "RF Systems", "Hardware Integration"],
  },
  {
    name: "Archisman Nebu",
    role: "Hardware Engineer",
    department: "Hardware",
    photo: "/archisman-nebu.jpeg",
    color: "#dc2626",
    bio: "A dedicated Hardware team member contributing to circuit design, sensor integration, and hardware verification across IQ AND INNOVATION's product lineup.",
    expertise: ["Circuit Design", "Sensor Integration", "Hardware Verification"],
  },
  {
    name: "Pritika Bhattacharya",
    role: "HR & Operations Manager",
    department: "HR",
    photo: "/pritika-bhattacharya.jpeg",
    color: "#e11d48",
    bio: "Works on managing the whole company maintaining the work deadlines of every member including the Founder and Co-Founders. Has full authority over operations, oversees sales, and tracks profit and revenue.",
    expertise: ["Operations Management", "HR Leadership", "Sales & Revenue", "Deadline Tracking"],
  },
];

/* ─── Reusable Photo Component ─── */
function MemberPhoto({ src, alt, avatar, size, borderColor }: {
  src: string | null; alt: string; avatar?: string; size: number; borderColor: string;
}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        border: `3px solid ${borderColor}`,
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        flexShrink: 0,
        position: "relative",
        background: src ? "var(--surface-alt)" : borderColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: "cover" }}
          sizes={`${size}px`}
        />
      ) : (
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: size * 0.32,
            color: "white",
            letterSpacing: "0.02em",
          }}
        >
          {avatar}
        </span>
      )}
    </div>
  );
}

/* ─── Section Header ─── */
function SectionHeader({ icon, title, subtitle, color }: {
  icon: React.ReactNode; title: string; subtitle: string; color: string;
}) {
  return (
    <div style={{ marginBottom: 36, textAlign: "center" }}>
      <div
        className="badge animate-fade-in"
        style={{
          display: "inline-flex",
          margin: "0 auto",
          borderColor: color,
          color: color,
        }}
      >
        {icon}
        <span>{title}</span>
      </div>
      <p
        style={{
          color: "var(--text-secondary)",
          fontSize: "0.9rem",
          marginTop: 10,
          maxWidth: 500,
          margin: "10px auto 0",
          lineHeight: 1.6,
        }}
      >
        {subtitle}
      </p>
    </div>
  );
}

export default function MembersPage() {
  return (
    <div style={{ minHeight: "80vh", width: "100%" }}>
      {/* ═══ Hero ═══ */}
      <section
        className="grid-pattern hero-section"
        style={{ padding: "60px 20px 48px", textAlign: "center" }}
      >
        <div style={{ maxWidth: 740, margin: "0 auto" }}>
          <div className="badge animate-fade-in" style={{ display: "inline-flex", margin: "0 auto" }}>
            <UsersIcon size={16} color="var(--primary)" />
            <span>Our People</span>
          </div>
          <h1
            className="animate-fade-in-up"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 3.4rem)",
              marginTop: 18,
              lineHeight: 1.15,
            }}
          >
            Meet the <span className="gradient-text">Team</span>
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
            The dedicated team of innovators, engineers, and leaders behind IQ &amp; INNOVATION — building indigenous smart technology for India&apos;s future.
          </p>
        </div>
      </section>

      {/* ═══ SECTION 1 — Founder ═══ */}
      <section className="section-wrapper" style={{ paddingTop: 10, paddingBottom: 20 }}>
        <SectionHeader
          icon={<CrownIcon size={16} color="#0e7c6b" />}
          title="Founder"
          subtitle="The visionary who started it all"
          color="#0e7c6b"
        />

        <div
          className="card-brutal animate-fade-in-up delay-100"
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: 0,
            overflow: "hidden",
          }}
        >
          {/* Gold accent bar */}
          <div
            style={{
              height: 6,
              background: "linear-gradient(90deg, #0e7c6b, #1a5fa8)",
            }}
          />
          <div
            style={{
              padding: "36px 32px 32px",
              display: "flex",
              gap: 28,
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, minWidth: 120 }}>
              <MemberPhoto
                src={founder.photo}
                alt={founder.name}
                size={120}
                borderColor={founder.color}
              />

            </div>

            <div style={{ flex: 1, minWidth: 240 }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: 2 }}>
                {founder.name}
              </h2>
              <p
                style={{
                  color: founder.color,
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  fontFamily: "'Space Grotesk', sans-serif",
                  marginBottom: 4,
                }}
              >
                {founder.role}
              </p>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  fontStyle: "italic",
                }}
              >
              </span>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  marginTop: 14,
                  marginBottom: 18,
                }}
              >
                {founder.bio}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {founder.expertise.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      background: "var(--surface-alt)",
                      border: "1px solid var(--border)",
                      borderRadius: 6,
                      padding: "4px 10px",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2 — Co-Founders ═══ */}
      <section className="section-wrapper" style={{ paddingTop: 20, paddingBottom: 20 }}>
        <SectionHeader
          icon={<StarIcon size={16} color="#d97706" />}
          title="Co-Founders"
          subtitle="The core pillars driving Hardware & Software"
          color="#d97706"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
            gap: 26,
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {coFounders.map((person, i) => (
            <div
              key={person.name}
              className={`card-brutal animate-fade-in-up delay-${(i + 1) * 100}`}
              style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}
            >
              <div style={{ height: 5, background: person.color }} />
              <div style={{ padding: "28px 24px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
                {/* Top row: photo + info */}
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
                  <MemberPhoto
                    src={person.photo}
                    alt={person.name}
                    size={80}
                    borderColor={person.color}
                  />
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: "1.15rem", fontWeight: 700, lineHeight: 1.25 }}>
                      {person.name}
                    </h3>
                    <p style={{ color: person.color, fontSize: "0.82rem", fontWeight: 600, marginTop: 2, fontFamily: "'Space Grotesk', sans-serif" }}>
                      {person.role}
                    </p>

                  </div>
                </div>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.86rem",
                    lineHeight: 1.7,
                    marginBottom: 18,
                    flex: 1,
                  }}
                >
                  {person.bio}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
                  {person.expertise.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        background: "var(--surface-alt)",
                        border: "1px solid var(--border)",
                        borderRadius: 6,
                        padding: "4px 10px",
                        fontSize: "0.73rem",
                        fontWeight: 600,
                        color: "var(--text-secondary)",
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ SECTION 3 — Software & Hardware Members ═══ */}
      <section className="section-wrapper" style={{ paddingTop: 20, paddingBottom: 20 }}>
        <SectionHeader
          icon={<SparklesIcon size={16} color="var(--primary)" />}
          title="Core Team"
          subtitle="Software, Hardware & Engineering specialists"
          color="var(--primary)"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: 22,
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >
          {members.filter(m => m.department !== "HR").map((person, i) => (
            <div
              key={person.name}
              className={`card-brutal animate-fade-in-up delay-${(i + 1) * 100}`}
              style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}
            >
              <div style={{ height: 4, background: person.color }} />
              <div style={{ padding: "22px 20px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
                {/* Photo + basic info */}
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                  <MemberPhoto
                    src={person.photo}
                    alt={person.name}
                    avatar={person.avatar}
                    size={64}
                    borderColor={person.color}
                  />
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 700, lineHeight: 1.25 }}>
                      {person.name}
                    </h3>
                    <p style={{ color: person.color, fontSize: "0.78rem", fontWeight: 600, marginTop: 2, fontFamily: "'Space Grotesk', sans-serif" }}>
                      {person.role}
                    </p>

                  </div>
                </div>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.84rem",
                    lineHeight: 1.7,
                    marginBottom: 16,
                    flex: 1,
                  }}
                >
                  {person.bio}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: "auto" }}>
                  {person.expertise.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        background: "var(--surface-alt)",
                        border: "1px solid var(--border)",
                        borderRadius: 6,
                        padding: "3px 9px",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        color: "var(--text-secondary)",
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ SECTION 4 — HR & Operations ═══ */}
      <section className="section-wrapper" style={{ paddingTop: 20 }}>
        <SectionHeader
          icon={<ShieldCheckIcon size={16} color="#e11d48" />}
          title="HR & Operations"
          subtitle="Keeping the company running seamlessly"
          color="#e11d48"
        />

        {members.filter(m => m.department === "HR").map((person, i) => (
          <div
            key={person.name}
            className={`card-brutal animate-fade-in-up delay-${(i + 1) * 100}`}
            style={{
              maxWidth: 680,
              margin: "0 auto",
              padding: 0,
              overflow: "hidden",
            }}
          >
            <div style={{ height: 5, background: person.color }} />
            <div
              style={{
                padding: "28px 28px 26px",
                display: "flex",
                gap: 22,
                alignItems: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, minWidth: 100 }}>
                <MemberPhoto
                  src={person.photo}
                  alt={person.name}
                  avatar={person.avatar}
                  size={90}
                  borderColor={person.color}
                />

              </div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: 2 }}>
                  {person.name}
                </h3>
                <p
                  style={{
                    color: person.color,
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    fontFamily: "'Space Grotesk', sans-serif",
                    marginBottom: 12,
                  }}
                >
                  {person.role}
                </p>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.86rem",
                    lineHeight: 1.7,
                    marginBottom: 16,
                  }}
                >
                  {person.bio}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {person.expertise.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        background: "var(--surface-alt)",
                        border: "1px solid var(--border)",
                        borderRadius: 6,
                        padding: "4px 10px",
                        fontSize: "0.73rem",
                        fontWeight: 600,
                        color: "var(--text-secondary)",
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
