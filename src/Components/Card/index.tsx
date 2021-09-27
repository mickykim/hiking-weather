import React from "react";
import {
    CardContainer,
    CardWrapper,
    Content,
    Heading,
    Img,
    ImgWrapper,
    Subtitle,
    Grid,
} from "./CardElements";

export interface Props {
    xl?: boolean;
    shaded?: boolean;
    img?: string;
}

const Card: React.FC<Props> = ({ xl, shaded, img }) => {
    return (
        <>
            <CardContainer>
                <CardWrapper xl={xl} shaded={shaded}>
                    <Grid>
                        <Content>
                            <Heading>Lorem ipsum dolor sit amet.</Heading>
                            <Subtitle>Lorem ipsum dolor sit amet.</Subtitle>
                        </Content>
                        <ImgWrapper img={img}>
                            <Img src={img} />
                        </ImgWrapper>
                    </Grid>
                </CardWrapper>
            </CardContainer>
        </>
    );
};

export default Card;
