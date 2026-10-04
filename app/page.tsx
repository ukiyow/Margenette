export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "24px",
        maxWidth: "560px",
        margin: "0 auto",
        lineHeight: 1.4,
      }}
    >
      <h1 style={{ fontSize: "2rem", margin: "0 0 12px" }}>MargeNette</h1>
      <p style={{ fontSize: "1.25rem", margin: 0 }}>
        Repère les commandes vendues à perte, en temps réel.
      </p>
      <p style={{ color: "#555", marginTop: "16px" }}>Bientôt disponible.</p>
    </main>
  );
}
