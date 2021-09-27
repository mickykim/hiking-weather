import React, { useState, useEffect } from "react";
import NavigationLinks from "./NavigationLinks";
import {
    HeaderContainer,
    Logo,
    Header,
    MobileIcon,
    MobileLogo,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import Searchbar from "../Searchbar";

interface Props {
    toggleSidebar: () => void;
    small: boolean;
}

const Navbar: React.FC<Props> = ({ toggleSidebar }) => {
    const [scrollNav, setScrollNav] = useState<boolean>(false);

    const toggleScrollNav = () => {
        // Amount scrolled vertically
        if (window.scrollY > 300) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", toggleScrollNav);
    }, []);

    return (
        <Header scrollNav={scrollNav}>
            <HeaderContainer>
                <Logo>HikingWeather</Logo>
                <MobileLogo>HW</MobileLogo>
                <Searchbar small={true} active={scrollNav} />
                <NavigationLinks headerOffset={-50} />
                <MobileIcon>
                    <FaBars onClick={toggleSidebar} />
                </MobileIcon>
            </HeaderContainer>
        </Header>
    );
};

export default Navbar;
