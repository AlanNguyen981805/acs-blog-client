import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../../styles/Home.module.css'
import Layout from '../components/layout'
import { getListAddress } from '../redux/test/actionTest'

const Home: NextPage = () => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  console.log(state)
  useEffect(() => {
    dispatch(getListAddress('aaa'))
  }, [])
  return (
    <Layout>
      
    </Layout>
  )
}

export default Home
