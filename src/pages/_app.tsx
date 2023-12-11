import type { AppProps } from 'next/app'
import globalStyle from './styles/globalStyle' 
import logo from './assets/Logo.svg'
import { Container, Header } from './styles/pages/app'

globalStyle()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logo.src} alt="Logo" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}