import React from "react";
import { NavbarItem, NavbarLink, NavbarMenu } from "./NavbarElements";
function NavigationLinks({ headerOffset }) {
    return (
        <NavbarMenu>
            <NavbarItem>
                <NavbarLink
                    to="main"
                    activeClass="active"
                    smooth={true}
                    duration={500}
                    offset={headerOffset}
                >
                    Home
                </NavbarLink>
            </NavbarItem>
            <NavbarItem>
                <NavbarLink
                    to="section1"
                    activeClass="active"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={headerOffset}
                >
                    About
                </NavbarLink>
            </NavbarItem>
            <NavbarItem>
                <NavbarLink
                    to="section2"
                    activeClass="active"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={headerOffset}
                >
                    Air
                </NavbarLink>
            </NavbarItem>
            <NavbarItem>
                <NavbarLink
                    to="section3"
                    activeClass="active"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={headerOffset}
                >
                    Mayo
                </NavbarLink>
            </NavbarItem>
        </NavbarMenu>
    );
}

export default NavigationLinks;
