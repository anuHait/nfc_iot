import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";
import axios from "axios";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY,
  {
    apiVersion: "2020-08-27",
  }
);

export async function POST(req) {
  const payload = await req.text();
  const res = JSON.parse(payload);

  const sig = req.headers.get("Stripe-Signature");
  let amount=0;
  try {
    let event = stripe.webhooks.constructEvent(
      payload,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    console.log("Event", event?.type);
    if (event.type === "checkout.session.completed") {
      const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
        event.data.object.id,
        {
          expand: ["line_items"],
        }
      );
      const lineItems = sessionWithLineItems.line_items.data; 

      if (!lineItems.length) return res.status(500).send("Internal Server Error");

      try {
        amount=(event.data.object.amount_total)/100;
        console.log("data", lineItems);
        //console.log("customer email", event.data.object.customer_details.email);
        //console.log("amount", amount);
        if(amount!=0){
          const res=await axios.get(`https://aptcbackendw.vercel.app/update_balance/1619f204/${amount}`);
          console.log("Response", res.data);
          return NextResponse.json({ status: "Update success", event: event.type, response: res });
        }
      } catch (error) {
        console.log("Handling when you're unable to save an order");
      }
    }
    return NextResponse.json({ status: "sucess", event: event.type, response: res });
  } catch (error) {
    return NextResponse.json({ status: "Failed", error });
  }
}