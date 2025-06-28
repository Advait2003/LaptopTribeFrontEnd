// Layout.jsx
import React from "react";
import Navbar from "../components/NavbarComponents/Navbar";
import Footer from "./FooterComponents/Footer";
import AdSpace from "./AdSidebar/AdSidebarComponent";

const Layout = ({ children }) => {
  return (
<<<<<<< HEAD
    <>
      <Navbar />
      <div className="flex flex-grow w-full rounded-none">
        <main className="flex-grow p-0 w-full rounded-none">{children}</main>
      </div>
      <Footer />
    </>
=======
    <div>
      <Navbar />
      <div className="flex flex-grow">
        {/* Main content */}
        <main className="flex-grow p-4">{children}</main>
        {/* Ad Sidebar */}
        <aside className="w-64 bg-gray-100 p-4 hidden md:block">
          <AdSpace />
        </aside>
      </div>
      <Footer />
    </div>
>>>>>>> 94b0eceb4fdc6bfe5544ae39784cea28a3c60c69
  );
};

export default Layout;
