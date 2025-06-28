// Layout.jsx
import React from "react";
import Navbar from "../components/NavbarComponents/Navbar";
import Footer from "./FooterComponents/Footer";
import AdSpace from "./AdSidebar/AdSidebarComponent";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-grow w-full rounded-none">
        <main className="flex-grow p-0 w-full rounded-none">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
