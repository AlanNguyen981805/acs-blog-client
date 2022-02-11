import '../../styles/globals.scss'
import type { AppProps } from 'next/app'
import { wrapper } from '../redux/store'
import { Provider, useDispatch, useStore } from 'react-redux'
import { SessionProvider } from "next-auth/react"
import Alert from '../components/global/alert'
import { Toaster } from 'react-hot-toast'
import Layout from '../components/layout'
import { useEffect } from 'react'
import { refreshToken } from '../redux/auth/action'
import axios from 'axios'

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  const reduxStore = useStore();
  const dispatch = useDispatch()

  useEffect(() => {
    let a = localStorage.getItem("logged")
    console.log(a)
    if(a !== "true") return
    dispatch(refreshToken())
  }, [])
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
