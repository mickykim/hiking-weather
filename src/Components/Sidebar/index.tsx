import React from "react";
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    Menu,
    ScrollLink,
    ButtonLink,
    ButtonWrapper,
    Spacing,
    SidebarWrapper,
} from "./SidebarElements";

export interface Props {
    toggleSidebar?: () => void;
    isOpen?: boolean;
    buttonLink?: string;
}

const Sidebar: React.FC<Props> = ({
    toggleSidebar,
    isOpen,
    buttonLink = "main",
}) => {
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
                        <ButtonLink to={buttonLink}>Sign In</ButtonLink>
                    </ButtonWrapper>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    );
};

export default Sidebar;
