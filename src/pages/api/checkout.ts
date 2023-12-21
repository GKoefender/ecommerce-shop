import { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from '../../libs/stripe'

export default async function checkout (req: NextApiRequest, res: NextApiResponse) {
  const { priceId, productId } = req.body

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!priceId) {
    return res.status(400).json({ error: 'Price not found' })
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`
  // const returnUrl = `${process.env.NEXT_URL}/product/${productId}`

  const checkoutSession = await stripe.checkout.sessions.create({
    cancel_url: cancelUrl,
    success_url: successUrl,
    // return_url: returnUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1
      }
    ]
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}  