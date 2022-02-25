import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../../styles/Home.module.scss'
import { RootStore } from '../../../utils/TypeScript';
import createAxios from "../../../utils/axiosInstance"
import { LOGOUT } from '../../../redux/auth/type';
import { useRouter } from 'next/router';
import LogoGlobal from '../../global/logo';
import { AF_LOGIN_MENU, BF_LOGIN_MENU } from '../../../utils/constand';

const Header = () => {
    const dispatch = useDispatch()
    const { auth } = useSelector((state: RootStore) => state)
    const router = useRouter()
    const navLinks = auth.access_token ? AF_LOGIN_MENU : BF_LOGIN_MENU

    const handleLogout= async () => {
        try {
            const res = await createAxios.get('/api/logout')
            dispatch({
                type: LOGOUT
            })
            router.push("/")
        } catch (error) {
            
        }
    }

    useEffect(() => {
        console.log(auth)
    }, [auth])
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <h1 className={styles.logo}>
                    <Link href={"/"}>
                        <LogoGlobal 
                            width={70}
                            height={50}
                        />
                    </Link></h1>
                <ul className={styles.ul}>
                    {
                        navLinks.map((item) => {
                            return (
                                <li className={styles.li}>
                                    <a href="" className={styles.a}>
                                        <Link href={item.path}>{item.label}</Link>
                                    </a>
                                </li>
                            )
                        })
                    }
                    {
                        auth.access_token ? (
                            <li className={styles.li} onClick={handleLogout}>
                                <a href="#" className={styles.a}>
                                    <a >Logout</a>
                                </a>
                            </li>
                        ) :  null
                    }
                    
                </ul>
            </nav>
        </header>
    );
};

export default Header;