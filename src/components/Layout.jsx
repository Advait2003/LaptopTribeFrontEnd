// Layout.jsx
import React from 'react';
import Navbar from '../components/NavbarComponents/Navbar';
import Footer from './FooterComponents/Footer';
import AdSpace from './AdSidebar/AdSidebarComponent';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-grow">
        {/* Main content */}
        <main className="flex-grow p-4">
          {children}
        </main>

        {/* Ad Sidebar */}
        <aside className="w-64 bg-gray-200 p-4 hidden md:block">
          <AdSpace />
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
