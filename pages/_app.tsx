import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'urql';
import { gqlClient } from '../auth/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (<Provider value={gqlClient}>
    <Component {...pageProps} />
  </Provider>)
}

export default MyApp
