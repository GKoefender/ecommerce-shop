import { GetServerSideProps } from "next";
import { SuccessContainer, ProductImage } from "../styles/pages/success";
import Image from 'next/image'
import { stripe } from "../libs/stripe";
import Stripe from "stripe";
import Head from "next/head";

interface SuccessProps {
  customerName: string
  product: {
    name: string
    imageUrl: string
  }
}

export default function Success ({customerName, product }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | E-commerce Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>
          Compra efetuada!
        </h1>

        <ProductImage>
          <Image src={product.imageUrl} alt="" width={127} height={145} />
        </ProductImage>


        <h3>Uhuul <span>{customerName}</span>, sua <span>{product.name}</span> já está a caminho da sua casa.</h3>

        <button>Voltar ao Catálogo</button>
    </SuccessContainer>
    </>
    
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if(!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details.name
  const product = session.line_items.data[0].price.product as Stripe.Product

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0]
      }
    }
  }
}