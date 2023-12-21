import { useRouter } from 'next/router'
import Image from 'next/image'
import { ProductContainer, ProductImage, ProductResume } from '../../styles/pages/product'
import { GetStaticPaths, GetStaticProps } from 'next';
import { stripe } from '../../libs/stripe';
import Stripe from 'stripe';

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
  }
}

export default function Product ({ product }: ProductProps) {
  const { isFallback } = useRouter()

  if(isFallback) {
    return (
      <h1>Loading . . .</h1>
    )
  }

  return (
    <ProductContainer>
      <ProductImage>
        <Image src={product.imageUrl} alt="" width={520} height={480} />
      </ProductImage>

      <ProductResume>
        <strong>{product.name}</strong>
        <span>{product.price}</span>

        <text>{product.description}</text>
        <button>Comprar agora</button>
      </ProductResume>
    </ProductContainer>                     
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price
  
  return {
    props: {
      product:  {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
        description: product.description
      }
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}
