import './../../styles/globals.scss'
import type { AppProps } from 'next/app'
import { wrapper } from '../redux/store'
import { Provider, useStore } from 'react-redux'
import { SessionProvider } from "next-auth/react"
import Alert from '../components/global/alert'
import { Toaster } from 'react-hot-toast'
import Layout from '../components/layout'

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  const reduxStore = useStore();

  return (
    <>
    <SessionProvider session={session}>
      {/* <Alert /> */}
      <Toaster />
      <Provider store={reduxStore}>
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
    </>
  )
  
}

export default wrapper.withRedux(MyApp)
