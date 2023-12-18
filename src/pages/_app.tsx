import type { AppProps } from 'next/app'
import Image from 'next/image'

import { globalStyles } from '../styles/globalStyle' 
import logo from '../assets/Logo.svg'
import { Container, Header } from '../styles/pages/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <Container>
      <Header>
        <Image src={logo} alt="Logo" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}