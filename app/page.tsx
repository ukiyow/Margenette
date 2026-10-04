const css = `
:root{--bg:#07110B;--card:#0D1A12;--line:#1B2E21;--g:#3DFF6B;--t:#F2F7F3;--m:#93A59A}
*{box-sizing:border-box}
body{background:var(--bg);color:var(--t)}
.w{max-width:560px;margin:0 auto;padding:28px 20px 120px}
.tag{font-family:ui-monospace,Menlo,monospace;color:var(--g);font-size:12px;letter-spacing:.06em;text-transform:uppercase;margin:0 0 20px}
h1{font-size:2.2rem;line-height:1.05;letter-spacing:-.03em;font-weight:800;margin:0 0 16px}
.sub{font-size:1.1rem;color:var(--m);margin:0 0 28px;line-height:1.45}
.btn{display:block;text-align:center;background:var(--g);color:#04120A;font-weight:800;font-size:1.05rem;padding:18px 20px;border-radius:12px;text-decoration:none}
.note{font-size:13px;color:var(--m);text-align:center;margin:10px 0 0}
.ex{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:18px;margin:36px 0;font-family:ui-monospace,Menlo,monospace;font-size:14px}
.ex h2{font-family:system-ui,sans-serif;font-size:13px;color:var(--g);text-transform:uppercase;letter-spacing:.06em;margin:0 0 12px}
.r{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--line)}
.r:last-child{border:0}
.bad{color:#FF6B5E;font-weight:700}
.ok{color:var(--g)}
h3{font-size:1.15rem;margin:0 0 4px;letter-spacing:-.01em}
.b{padding:16px 0;border-top:1px solid var(--line)}
.b p{margin:0;color:var(--m);line-height:1.45}
.bar{position:fixed;left:0;right:0;bottom:0;padding:12px 20px calc(12px + env(safe-area-inset-bottom,0px));background:rgba(7,17,11,.96);border-top:1px solid var(--line)}
.bar .btn{max-width:520px;margin:0 auto}
`;

export default function Page() {
  return (
    <>
      <style>{css}</style>
      <main className="w">
        <p className="tag">MargeNette</p>
        <h1>Chaque commande soldée vous coûte-t-elle de l'argent ?</h1>
        <p className="sub">
          MargeNette repère les commandes vendues à perte, en temps réel.
        </p>
        <a className="btn" href="/api/checkout">
          Je réserve ma place à 39 €/mois
        </a>
        <p className="note">
          Tarif bloqué à vie pour les 10 premiers clients. Sans engagement.
        </p>

        <section className="ex">
          <h2>Exemple chiffré</h2>
          <div className="r"><span>Panier</span><span>40,00 €</span></div>
          <div className="r"><span>Code promo −30 %</span><span>−12,00 €</span></div>
          <div className="r"><span>Coût du produit</span><span>−20,00 €</span></div>
          <div className="r"><span>Marge vue dans Shopify</span><span className="ok">+8,00 €</span></div>
          <div className="r"><span>Frais Stripe</span><span>−0,67 €</span></div>
          <div className="r"><span>Transport réel</span><span>−8,20 €</span></div>
          <div className="r"><span>Marge réelle</span><span className="bad">−0,87 €</span></div>
        </section>

        <section>
          <div className="b">
            <h3>Ta vraie marge, commande par commande</h3>
            <p>Frais Stripe, transport selon poids et zone, remises cumulées : tout est déduit.</p>
          </div>
          <div className="b">
            <h3>Une alerte email avant que ça coûte</h3>
            <p>Marge négative ou sous ton seuil : tu es prévenu, surtout pendant les soldes.</p>
          </div>
          <div className="b">
            <h3>Export CSV inclus</h3>
            <p>Pour ton comptable, ou pour trier tes commandes comme tu veux.</p>
          </div>
        </section>
      </main>

      <div className="bar">
        <a className="btn" href="/api/checkout">
          Je réserve ma place à 39 €/mois
        </a>
      </div>
    </>
  );
}

