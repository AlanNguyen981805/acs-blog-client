// import styles from '../styles/Home.module.scss'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardVertical from '../components/cards/CardVertical'
// import styles from '../../styles/Home.module.css'
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
    <>
      <div>
        <div >
          <h3 className="category-title">Bài viết xem nhiều nhất</h3>
          <div className="containerCard">
            <CardVertical />
            <CardVertical />
            <CardVertical />
            <CardVertical />
          </div>
        </div>
        <div >
          <h3 className="category-title">Chia sẻ về cuộc sống</h3>
          <div className="containerCard">
            <CardVertical />
            <CardVertical />
            <CardVertical />
            <CardVertical />
          </div>
        </div>
        <div >
          <h3 className="category-title">Loại tin</h3>
          <div className="containerCard">
            <CardVertical />
            <CardVertical />
            <CardVertical />
            <CardVertical />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
