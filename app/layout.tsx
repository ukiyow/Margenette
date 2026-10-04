export const metadata = {
  title: "MargeNette — Repère les commandes vendues à perte",
  description:
    "Vois ta marge réelle après frais Stripe, transport et remises, commande par commande.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
