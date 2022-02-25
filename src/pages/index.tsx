// import styles from '../styles/Home.module.scss'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardVertical from '../components/cards/CardVertical'
import { RootStore } from '../utils/TypeScript'
import createAxios from '../utils/axiosInstance'
import { getHomeBlogsStart } from '../redux/home-blog/action'
import { IHomeBlogs } from '../redux/home-blog/type'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const [user, setUser] = useState([])
  const dispatch = useDispatch()
  const router = useRouter()
  const { homeCategory } = useSelector((state: RootStore) => state)

  useEffect(() => {
    getAllUser()
    dispatch(getHomeBlogsStart())
  }, [])

  useEffect(() => {
  }, [homeCategory])

  const getAllUser = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/users')

      const data = await res.data
      setUser(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleViewMore = (slug: string) => {
    router.push(`/category-blog/${slug}`)
  }


  return (
    <>
      <div>
        <div className="band">
          <div className="item-1">
            <a href="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852" className="card">
            <div className="thumb" style={{ backgroundImage: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg')" }} />
            <article>
              <h1>International Artist Feature: Malaysia</h1>
              <span>Mary Winkler</span>
            </article>
          </a>
        </div>
        {/* <CardVertical />
        <CardVertical /> */}
      </div>
      <div >
        {
          homeCategory.length > 0 && homeCategory.map((item: IHomeBlogs) => {
            return (
              <>
                <div className="box-title">
                  <h3 className="category-title">{item.name}</h3>
                  <div className="view-more">
                    <span onClick={() => handleViewMore(item.slug)}>Xem thêm</span>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16m-7-7l7 7l-7 7" /></svg>
                  </div>
                </div>
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
