import { SuccessContainer, ProductImage } from "../styles/pages/success";
import Image from 'next/image'

export default function Success () {
  return (
    <SuccessContainer>
      <h1>
        Compra efetuada!
      </h1>

      <ProductImage>
        <Image src="" alt="" width={127} height={145} />
      </ProductImage>


      <h3>Uhuul <span>João</span>, sua <span>Camiseta Beyond</span> já está a caminho da sua casa.</h3>

      <button>Voltar ao Catálogo</button>
    </SuccessContainer>
  )
}