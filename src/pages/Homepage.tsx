import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import React, { useState, useEffect } from "react";
import HeroSection from "../Components/HeroSection";
import InfoSection from "../Components/InfoSection";
import { aboutData, airData, enjoyData } from "../Components/InfoSection/Data";
import Footer from "../Components/Footer";
import CardSection from "../Components/CardSection";
const Homepage = () => {
    useEffect(() => {
        document.title = "HikingWeather";
    }, []);
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarIsOpen(!sidebarIsOpen);
    };
    return (
        <div>
            <Navbar toggleSidebar={toggleSidebar} logoLink="main" />
            <Sidebar toggleSidebar={toggleSidebar} isOpen={sidebarIsOpen} />
            <HeroSection id="main" />
            {/* <CardSection /> */}
            <InfoSection {...aboutData} />
            <InfoSection {...enjoyData} />
            <InfoSection {...airData} />

            <Footer />
        </div>
    );
};

export default Homepage;
