import React from "react";
import Card from "../Card";
import {
    CardSectionContainer,
    CardSectionWrapper,
    PrimaryInfo,
    SecondaryInfo,
} from "./CardSectionElements";

import aboutImg from "../../assets/images/hiking.svg";

export interface Props {
    xl: boolean;
    shaded: boolean;
    img: string;
}

const CardSection: React.FC<Props> = ({ xl, shaded, img }) => {
    return (
        <CardSectionContainer>
            <CardSectionWrapper>
                <PrimaryInfo>
                    <Card xl={true} shaded={false} img={aboutImg} />
                </PrimaryInfo>
                <SecondaryInfo>
                    <Card shaded={true} />
                    <Card shaded={true} />
                    <Card shaded={true} />
                    <Card shaded={true} />
                </SecondaryInfo>
            </CardSectionWrapper>
        </CardSectionContainer>
    );
};

export default CardSection;
