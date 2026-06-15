"use client";

export default function TrustBadgeMLH() {
  return (
    <a
      id="mlh-trust-badge"
      style={{
        display: "block",
        maxWidth: "150px",
        minWidth: "60px",
        position: "fixed",
        right: "2vw",
        top: "-5px",
        width: "8vw",
        zIndex: 1001,
        transition: "all 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(5px)";
        e.currentTarget.style.filter = "drop-shadow(0 0 1em #ffffff50)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.filter = "";
      }}
      href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://logged-assets.s3.amazonaws.com/trust-badge/2027/mlh-trust-badge-2027-white.svg"
        alt="Major League Hacking 2026 Hackathon Season"
        style={{ width: "100%" }}
      />
    </a>
  );
}
