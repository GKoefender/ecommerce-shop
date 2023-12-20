import { useRouter } from 'next/router'
import Image from 'next/image'
import { ProductContainer, ProductImage, ProductResume } from '../../styles/pages/product'

const img = 'https://www.botoli.com.br/cdn/imagens/produtos/det/camiseta-puma-big-logo-tee-22-masculino-af24acfc51f3f2aee9254e6068c3412c.jpg'

export default function Product () {
  const router = useRouter();

  const { id } = router.query;
  return (
    <ProductContainer>
      <ProductImage>
        <Image src={''} alt="" width={520} height={480} />
      </ProductImage>

      <ProductResume>
        <div>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>

          <text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quasi esse exercitationem perferendis aperiam corporis dolores velit. Cumque rem unde aut fugiat, libero nam accusantium quas soluta explicabo error ea.</text>
        </div>

        <button>Comprar agora</button>
      </ProductResume>
    </ProductContainer>
  );
}
