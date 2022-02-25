import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <Header />
            <div style={{width: '1170px', margin: '0 auto'}}>
                {
                    children
                }
            </div>
            <Footer />
        </div>
    );
};

export default Layout;