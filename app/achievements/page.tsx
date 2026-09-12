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
} from "../components/Icons";

export default function AchievementsPage() {
  const achievements = [
    {
      icon: <TrophyIcon size={28} color="var(--primary)" />,
      title: "National Innovation Recognition",
      description:
        "Recognized by Government of India innovation initiatives for pioneering contributions in indigenous smart robotics and public utility automation.",
    },
    {
      icon: <MedalIcon size={28} color="var(--accent)" />,
      title: "Smart India Hackathon — Top Honors",
      description:
        "Awarded top honors at SIH for developing an autonomous water quality monitoring robotic solution — the precursor to ARGUS AquaBot.",
    },
    {
      icon: <RocketIcon size={28} color="var(--primary)" />,
      title: "Startup India / DPIIT Alignment",
      description:
        "Officially recognized and registered under the Startup India initiative by DPIIT with priority government procurement privileges.",
    },
    {
      icon: <PatentIcon size={28} color="var(--accent)" />,
      title: "Patent Filed — Smart Energy Telemetry",
      description:
        "Intellectual property filed for proprietary tamper-resistant energy analytics and telemetry algorithms integrated into ARGUS Smart Meter.",
    },
    {
      icon: <EducationIcon size={28} color="var(--primary)" />,
      title: "Incubated at Premier Tech Hub",
      description:
        "Incubated at a premier Indian Institute of Technology (IIT) ecosystem with continuous R&D lab access and high-precision testing facilities.",
    },
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
        "IQ & Innovation's smart metering platform demonstrated remarkable precision and telemetry uptime in our pilot evaluations. A breakthrough for municipal digitization.",
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
      partner: "Smart City Mission — Pilot Project",
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
      partner: "State Municipal IT Board",
      type: "Government Contract",
      description:
        "Implementation of autonomous water-body quality monitoring stations using the ARGUS aquatic robot series.",
      status: "Awarded",
    },
  ];

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
            National recognitions, alumni excellence, client endorsements, and mission-critical government partnerships.
          </p>
        </div>
      </section>

      <section className="section-wrapper" style={{ paddingTop: 10 }}>
        {/* Section 1: Awards & Achievements */}
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
              <TrophyIcon size={20} color="#ffffff" />
            </div>
            <h2 style={{ fontSize: "clamp(1.25rem, 3.5vw, 1.6rem)", fontWeight: 700 }}>
              Awards &amp; Recognitions
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
              gap: 20,
            }}
          >
            {achievements.map((a, i) => (
              <div
                key={a.title}
                className={`card-bento animate-fade-in-up delay-${(i + 1) * 100}`}
                style={{ padding: "24px", display: "flex", flexDirection: "column" }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 12,
                    background: "var(--surface-alt)",
                    border: "1.5px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                  }}
                >
                  {a.icon}
                </div>
                <h3 style={{ fontSize: "1.08rem", fontWeight: 700, marginBottom: 8 }}>
                  {a.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.86rem",
                    lineHeight: 1.65,
                    marginTop: "auto",
                  }}
                >
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Notable Alumni */}
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

        {/* Section 3: Reviews */}
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

        {/* Section 4: Contracts */}
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
