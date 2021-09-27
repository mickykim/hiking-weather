import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import React, { useState } from "react";
import HeroSection from "../Components/HeroSection";
import InfoSection from "../Components/InfoSection";
import { aboutData, airData, mayoData } from "../Components/InfoSection/Data";
import Footer from "../Components/Footer";
import CardSection from "../Components/CardSection";
const Homepage = () => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarIsOpen(!sidebarIsOpen);
    };
    return (
        <div>
            <Navbar toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={sidebarIsOpen} toggleSidebar={toggleSidebar} />
            <HeroSection id="main" />
            <CardSection />
            <InfoSection {...aboutData} />
            <InfoSection {...airData} />
            <InfoSection {...mayoData} />
            <Footer />
        </div>
    );
};

export default Homepage;
