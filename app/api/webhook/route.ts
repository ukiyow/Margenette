import Stripe from "stripe";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const key = process.env.STRIPE_SECRET_KEY;
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = request.headers.get("stripe-signature");

  if (!key || !secret || !signature) {
    return new Response("Configuration incomplète.", { status: 400 });
  }

  const stripe = new Stripe(key);
  const body = await request.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, secret);
  } catch {
    return new Response("Signature invalide.", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    console.log("Paiement confirmé :", session.customer_details?.email);
  }

  if (event.type === "invoice.payment_failed") {
    console.log("Paiement échoué");
  }

  return new Response("ok", { status: 200 });
}
