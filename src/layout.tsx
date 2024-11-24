import React, { ReactNode } from 'react';
import Header from './components/header.tsx';
import Footer from './components/footer.tsx';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
    <div id="root">
        <Header />
        <main>{children}</main>
        <Footer />
    </div>
);

export default Layout;