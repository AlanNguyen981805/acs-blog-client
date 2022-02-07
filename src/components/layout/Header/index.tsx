import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../../../../styles/Home.module.scss'
import { RootStore } from '../../../utils/TypeScript';

const Header = () => {
    const { auth } = useSelector((state: RootStore) => state)
    const bfLoginMenu = [
        {label: "Đăng nhập", path: '/login'},
        {label: "Đăng ký", path: '/register'},
    ]

    const afloginMenu = [
        {label: "Trang chủ", path: '/'},
        {label: "Tạo Bài Viết", path: 'create-blog'}
    ]

    const navLinks = auth.access_token ? afloginMenu : bfLoginMenu

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <h1 className={styles.logo}><Link href={"/"}>ACS</Link></h1>
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
                </ul>
            </nav>
        </header>
    );
};

export default Header;