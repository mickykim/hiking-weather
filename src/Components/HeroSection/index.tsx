import React from "react";
import Searchbar from "../Searchbar";
import {
    HeroContainer,
    H1,
    ImageBackground,
    TextWrapper,
    Content,
    P,
} from "./HeroElements";

interface Props {
    id: string;
}

const HeroSection: React.FC<Props> = ({ id }) => {
    return (
        <>
            <HeroContainer id={id}>
                <ImageBackground />
                <Content>
                    <TextWrapper>
                        <H1>Your Journey Starts Now</H1>
                        <P>
                            Enter any hiking destination and we'll tell you the
                            conditions
                        </P>
                    </TextWrapper>
                    <Searchbar lg={true} active={true} />
                </Content>
            </HeroContainer>
        </>
    );
};

export default HeroSection;
