import Stripe from "stripe";

export const dynamic = "force-dynamic";

export async function GET() {
  const key = process.env.STRIPE_SECRET_KEY;
  const price = process.env.STRIPE_PRICE_ID;
  const site = process.env.SITE_URL;

  if (!key || !price || !site) {
    return new Response("Configuration incomplète.", { status: 500 });
  }

  try {
    const stripe = new Stripe(key);
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price, quantity: 1 }],
      locale: "fr",
      success_url: `${site}/merci`,
      cancel_url: `${site}/`,
    });
    return Response.redirect(session.url as string, 303);
  } catch {
    return new Response("Le paiement est momentanément indisponible.", {
      status: 500,
    });
  }
}
