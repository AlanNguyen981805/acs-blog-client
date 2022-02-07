import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <Header />
            <div style={{height: '100vh', width: '1270px', margin: '0 auto'}}>
                {
                    children
                }
            </div>
            <Footer />
        </div>
    );
};

export default Layout;