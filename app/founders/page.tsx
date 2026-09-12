import { UsersIcon, SparklesIcon, ShieldCheckIcon } from "../components/Icons";

export default function FoundersPage() {
  const team = [
    {
      name: "Punarbosu Panja",
      role: "Founder & CEO",
      badge: "Founder",
      avatar: "PP",
      color: "var(--primary)",
      bio: "Visionary entrepreneur and technologist driving IQ & Innovation's mission to build intelligent, government-aligned automation solutions for India's digital infrastructure. Punarbosu spearheads the core product architecture, R&D strategy, and national technology partnerships.",
      expertise: ["Robotics Engineering", "IoT Systems", "Product Strategy", "Venture Leadership"],
    },
    {
      name: "Aritra Ghosh",
      role: "Co-Founder & CTO",
      badge: "Co-Founder",
      avatar: "AG",
      color: "var(--accent)",
      bio: "Technical architect behind the ARGUS and ASPER product lines. Aritra specializes in embedded systems, real-time AI/ML vision algorithms, and hardware-software synergy to deliver robust industrial-grade solutions.",
      expertise: ["Edge AI/ML", "Embedded Systems", "Hardware Architecture", "Firmware Design"],
    },
    {
      name: "Suvadip Roy",
      role: "Lead Engineer — Robotics",
      badge: "Core Team",
      avatar: "SR",
      color: "#0e7c6b",
      bio: "Seasoned robotics specialist heading autonomous navigation, multi-sensor fusion, and mechanical prototyping. Suvadip oversees hardware verification across all autonomous patrol and utility bots.",
      expertise: ["Autonomous Navigation", "Sensor Fusion", "CAD & Prototyping"],
    },
    {
      name: "Diya Chatterjee",
      role: "Lead Engineer — Software",
      badge: "Core Team",
      avatar: "DC",
      color: "#1a5fa8",
      bio: "Full-stack software architect directing the centralized IoT telemetry dashboards, cloud infrastructure, and device communication protocols across our active deployments.",
      expertise: ["Cloud IoT Platforms", "Distributed Systems", "API Architecture"],
    },
  ];

  return (
    <div style={{ minHeight: "80vh", width: "100%" }}>
      {/* Hero */}
      <section
        className="grid-pattern hero-section"
        style={{
          padding: "60px 20px 48px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 740, margin: "0 auto" }}>
          <div className="badge animate-fade-in" style={{ display: "inline-flex", margin: "0 auto" }}>
            <UsersIcon size={16} color="var(--primary)" />
            <span>Leadership &amp; Engineering</span>
          </div>
          <h1
            className="animate-fade-in-up"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 3.4rem)",
              marginTop: 18,
              lineHeight: 1.15,
            }}
          >
            Meet Our <span className="gradient-text">Founders &amp; Team</span>
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
            A dedicated team of innovators, roboticists, and engineers building indigenous smart technology for India&apos;s future.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-wrapper" style={{ paddingTop: 10 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: 26,
          }}
        >
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`card-brutal animate-fade-in-up delay-${(i + 1) * 100}`}
              style={{
                padding: 0,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Colored top bar */}
              <div
                style={{
                  height: 6,
                  background: member.color,
                }}
              />
              <div style={{ padding: "26px 24px 28px", display: "flex", flexDirection: "column", flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    marginBottom: 20,
                    flexWrap: "wrap",
                  }}
                >
                  {/* Monogram Avatar */}
                  <div
                    style={{
                      width: 54,
                      height: 54,
                      borderRadius: 14,
                      background: member.color,
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.15rem",
                      border: "2px solid var(--foreground)",
                      boxShadow: "var(--shadow-brutal-sm)",
                      flexShrink: 0,
                    }}
                  >
                    {member.avatar}
                  </div>
                  <div style={{ flex: "1 1 140px" }}>
                    <h3
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        lineHeight: 1.25,
                        color: "var(--foreground)",
                      }}
                    >
                      {member.name}
                    </h3>
                    <p
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "0.85rem",
                        marginTop: 2,
                      }}
                    >
                      {member.role}
                    </p>
                  </div>
                  <div
                    className="badge"
                    style={{
                      fontSize: "0.72rem",
                      padding: "4px 10px",
                      gap: 4,
                    }}
                  >
                    <SparklesIcon size={12} color="var(--primary)" />
                    <span>{member.badge}</span>
                  </div>
                </div>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                    marginBottom: 22,
                    flex: 1,
                  }}
                >
                  {member.bio}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    marginTop: "auto",
                  }}
                >
                  {member.expertise.map((skill) => (
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
          ))}
        </div>
      </section>
    </div>
  );
}
