export const metadata = { title: "Merci | MargeNette" };

export default function Merci() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#07110B",
        color: "#F2F7F3",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "24px",
        maxWidth: "560px",
        margin: "0 auto",
        lineHeight: 1.45,
      }}
    >
      <p style={{ color: "#3DFF6B", fontFamily: "monospace", margin: 0 }}>
        MARGENETTE
      </p>
      <h1 style={{ fontSize: "2rem", margin: "12px 0" }}>
        Merci, ta place est réservée.
      </h1>
      <p style={{ color: "#93A59A" }}>
        Une fois ton paiement confirmé, tu recevras un email de ma part pour
        activer ton accès.
      </p>
      <a href="/" style={{ color: "#3DFF6B" }}>
        Retour à l'accueil
      </a>
    </main>
  );
}
