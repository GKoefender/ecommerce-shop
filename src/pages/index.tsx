import { HomeContainer, Product } from '../styles/pages/home'
import Image from 'next/image'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import camisa1 from '../assets/camisetas/1.png'
import camisa2 from '../assets/camisetas/2.png'

export default function Home () {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <HomeContainer ref={sliderRef}>
      <Product className="keen-slider__slide number-slide">
        <Image src={camisa1} alt="" width={520} height={480} />

        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide number-slide">
        <Image src={camisa2} alt="" width={520} height={480} />

        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide number-slide">
        <Image src={camisa2} alt="" width={520} height={480} />

        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide number-slide">
        <Image src={camisa2} alt="" width={520} height={480} />

        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide number-slide">
        <Image src={camisa2} alt="" width={520} height={480} />

        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      
    </HomeContainer>
  )
}
