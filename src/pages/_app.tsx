import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '../redux/store'
import { Provider, useStore } from 'react-redux'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  const reduxStore = useStore();

  return (
    <>
    <SessionProvider session={session}>
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
    </>
  )
  
}

export default wrapper.withRedux(MyApp)
