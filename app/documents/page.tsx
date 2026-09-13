import {
  IndiaFlagIcon,
  BuildingIcon,
  RocketIcon,
  PatentIcon,
  ShieldCheckIcon,
  CurrencyRupeeIcon,
  FileTextIcon,
} from "../components/Icons";

export default function DocumentsPage() {
  const documents = [
    {
      category: "Company Registration",
      icon: <BuildingIcon size={20} color="#ffffff" />,
      docs: [
        {
          name: "Certificate of Incorporation",
          description:
            "Official certificate issued by the Ministry of Corporate Affairs (MCA), establishing the corporate registration of IQ & INNOVATION.",
          type: "Official PDF",
          issuer: "Ministry of Corporate Affairs",
        },
        {
          name: "GST Registration Certificate",
          description:
            "Goods and Services Tax registration identifier issued by the Central Board of Indirect Taxes and Customs (CBIC).",
          type: "Official PDF",
          issuer: "CBIC",
        },
      ],
    },
    {
      category: "Startup Registration & MSME Status",
      icon: <RocketIcon size={20} color="#ffffff" />,
      docs: [
        {
          name: "Startup India Registration Certificate",
          description:
            "Official registration certificate issued under the national Startup India portal.",
          type: "Registration Doc",
          issuer: "Startup India",
        },
        {
          name: "Udyam MSME Registration",
          description:
            "Micro, Small and Medium Enterprises national registry certificate validating technology manufacturing status.",
          type: "MSME Doc",
          issuer: "Ministry of MSME",
        },
      ],
    },
    {
      category: "Intellectual Property & Patents",
      icon: <PatentIcon size={20} color="#ffffff" />,
      docs: [
        {
          name: "Patent Application — Smart Telemetry System",
          description:
            "Patent filing document for ARGUS smart grid telemetry, tamper detection, and edge anomaly analytics algorithms.",
          type: "IP Filing",
          issuer: "Indian Patent Office",
        },
        {
          name: "Trademark Filing — IQ & INNOVATION",
          description:
            "Formal trademark registration for the IQ & INNOVATION brand identity and technology series names.",
          type: "IP Filing",
          issuer: "Trade Marks Registry India",
        },
      ],
    },
    {
      category: "Quality & Compliance",
      icon: <ShieldCheckIcon size={20} color="#ffffff" />,
      docs: [
        {
          name: "ISO 9001:2015 Compliance Framework",
          description:
            "Quality management protocol adherence documentation for hardware engineering and software integration.",
          type: "Quality Doc",
          issuer: "Bureau of Indian Standards / ISO",
        },
        {
          name: "BIS Electronic Safety Adherence",
          description:
            "Adherence to Bureau of Indian Standards safety guidelines for low-voltage IoT and robotic electronics.",
          type: "Safety Cert",
          issuer: "Bureau of Indian Standards (BIS)",
        },
      ],
    },
    {
      category: "Taxation & Statutory Compliances",
      icon: <CurrencyRupeeIcon size={20} color="#ffffff" />,
      docs: [
        {
          name: "Permanent Account Number (PAN)",
          description:
            "Corporate entity tax identification issued by the Income Tax Department of India.",
          type: "Statutory Doc",
          issuer: "Income Tax Department",
        },
        {
          name: "Tax Deduction Account (TAN)",
          description:
            "Statutory TAN certificate for withholding and TDS tax compliances.",
          type: "Statutory Doc",
          issuer: "Income Tax Department",
        },
      ],
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
            <ShieldCheckIcon size={16} color="var(--primary)" />
            <span>Compliance &amp; Verification</span>
          </div>
          <h1
            className="animate-fade-in-up"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 3.4rem)",
              marginTop: 18,
              lineHeight: 1.15,
            }}
          >
            Official &amp; Legal <span className="gradient-text">Documents</span>
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
            Official documentation verifying corporate registration, statutory compliance, and intellectual property.
          </p>
        </div>
      </section>

      <section className="section-wrapper" style={{ paddingTop: 10 }}>
        {/* Verification banner */}
        <div
          className="card-brutal animate-fade-in-up"
          style={{
            padding: "20px 24px",
            marginBottom: 44,
            background: "var(--surface-alt)",
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "var(--surface)",
              border: "2px solid var(--foreground)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <IndiaFlagIcon size={24} />
          </div>
          <div style={{ flex: "1 1 240px" }}>
            <p
              style={{
                fontWeight: 700,
                fontSize: "0.96rem",
                fontFamily: "'Space Grotesk', sans-serif",
                color: "var(--foreground)",
              }}
            >
              Formally Registered &amp; Regulatory Compliant
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.85rem",
                marginTop: 2,
              }}
            >
              All listed certificates, patents, and statutory clearances are verified and maintained in full regulatory compliance.
            </p>
          </div>
        </div>

        {/* Document Categories */}
        <div style={{ display: "flex", flexDirection: "column", gap: 42 }}>
          {documents.map((cat, ci) => (
            <div key={cat.category} className={`animate-fade-in-up delay-${(ci + 1) * 100}`}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "var(--primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid var(--foreground)",
                    boxShadow: "var(--shadow-brutal-sm)",
                    flexShrink: 0,
                  }}
                >
                  {cat.icon}
                </div>
                <h2 style={{ fontSize: "clamp(1.18rem, 3vw, 1.45rem)", fontWeight: 700 }}>
                  {cat.category}
                </h2>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
                  gap: 18,
                }}
              >
                {cat.docs.map((doc) => (
                  <div
                    key={doc.name}
                    className="card-bento"
                    style={{ padding: "22px 24px", display: "flex", flexDirection: "column" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: 10,
                        gap: 10,
                        flexWrap: "wrap",
                      }}
                    >
                      <h4 style={{ fontSize: "1.02rem", fontWeight: 700, flex: "1 1 180px", color: "var(--foreground)" }}>
                        {doc.name}
                      </h4>
                      <span
                        style={{
                          background: "var(--surface-alt)",
                          border: "1.5px solid var(--border)",
                          borderRadius: 6,
                          padding: "3px 8px",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          color: "var(--primary)",
                          fontFamily: "'Space Grotesk', sans-serif",
                        }}
                      >
                        {doc.type}
                      </span>
                    </div>
                    <p
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "0.86rem",
                        lineHeight: 1.65,
                        marginBottom: 16,
                        flex: 1,
                      }}
                    >
                      {doc.description}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: "0.78rem",
                        color: "var(--text-muted)",
                        fontFamily: "'Space Grotesk', sans-serif",
                        borderTop: "1px solid var(--border)",
                        paddingTop: 12,
                      }}
                    >
                      <FileTextIcon size={14} color="var(--primary)" />
                      <span>Issued by: {doc.issuer}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
