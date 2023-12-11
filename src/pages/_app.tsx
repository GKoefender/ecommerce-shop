import type { AppProps } from 'next/app'
import globalStyle from './styles/globalStyle' 

globalStyle()

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}