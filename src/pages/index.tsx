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
import { getHomeBlogsStart } from '../redux/home-blog/action'
import { IHomeBlogs } from '../redux/home-blog/type'

const Home: NextPage = () => {
  const [user, setUser] = useState([])
  const dispatch = useDispatch()
  const { homeCategory } = useSelector((state: RootStore) => state)

  useEffect(() => {
    getAllUser()

    dispatch(getHomeBlogsStart())
    console.log(homeCategory)
  }, [])

  useEffect(() => {
    console.log(homeCategory)
  }, [homeCategory])
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
          {
            homeCategory.length > 0 && homeCategory.map((item: IHomeBlogs) => {
              return (
                <>
                  <h3 className="category-title">{item.name}</h3>
                  <div className="containerCard">
                    {
                      item.blog.map((blog: any) => {
                        return (
                          <CardVertical blog={blog} />
                        )
                      })
                    }
                  </div>
              </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home
