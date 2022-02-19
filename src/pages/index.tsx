// import styles from '../styles/Home.module.scss'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardVertical from '../components/cards/CardVertical'
// import styles from '../../styles/Home.module.css'
import Layout from '../components/layout'
import { authSuccess } from '../redux/auth/action'
import { getListAddress } from '../redux/test/actionTest'
import { RootStore } from '../utils/TypeScript'
import createAxios from '../utils/axiosInstance'
import useLocalStorage from '../hooks/useLocalStorage'

const Home: NextPage = () => {
  const [user, setUser] = useState([])
  useEffect(() => {
    getAllUser()
  }, [])
  const refreshTokenAPI = async () => {
    try {
        const res = await axios.get("/api/refresh_token", {
            withCredentials: true
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

  const getAllUser = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/users')

      const data = await res.data
      setUser(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async (id: string) => {
    let data: any = localStorage.getItem("user")
    let parseData = JSON.parse(data)
    try {
      const res = await createAxios.delete(`/api/${id}`, {
        headers: {
          Authorization: parseData.access_token
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

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
    {/* <ul>
        {
          user.length > 0 && user.map((item: any) => {
            return (
              <li>
                <span>{item?.account}</span>  
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </li>
            )
          })
        }
    </ul> */}
      </div>
    </>
  )
}

export default Home
