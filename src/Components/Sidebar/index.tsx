import React from "react";
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    Item,
    Menu,
    ScrollLink,
    ButtonLink,
    ButtonWrapper,
    Spacing,
    SidebarWrapper,
} from "./SidebarElements";

const Sidebar = ({ toggleSidebar, isOpen }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen}>
                <Icon>
                    <CloseIcon onClick={toggleSidebar} />
                </Icon>
                <SidebarWrapper>
                    <Menu>
                        <Spacing />
                        <ScrollLink to="about">About</ScrollLink>
                        <ScrollLink to="about">Risks</ScrollLink>
                        <ScrollLink to="about">About</ScrollLink>
                        <ScrollLink to="singup">Signup</ScrollLink>
                    </Menu>
                    <ButtonWrapper>
                        <ButtonLink>Sign In</ButtonLink>
                    </ButtonWrapper>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    );
};

export default Sidebar;
