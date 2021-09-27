import styled from "styled-components";
import heroImage from "../../assets/images/heroImage4.jpg";
export const HeroContainer = styled.div`
    display: flex;
    height: 600px;
    width: 100%;
    justify-content: center;
    align-content: center;
    background-color: ${(props) => props.theme.primary};
`;

export const ImageBackground = styled.div`
    width: 100%;
    height: 100%;
    background-image: 
    /* Background image filter */ linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0.1) 100%
        ),
        linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%),
        /* Actual Image */ url(${heroImage});

    /* background-image: url(${heroImage}); */
    background-size: 1400px 600px;
    background-repeat: no-repeat;
    z-index: 1;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 500px;
    /* max-width: 1200px; */
    padding: 3.5rem 2.5rem;
    z-index: 2;
    color: ${(props) => props.theme.primaryTextDark};
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2.5rem;
`;

export const H1 = styled.h1`
    font-size: 3rem;
    text-align: center;
    font-weight: 900;
    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
    }
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const P = styled.p`
    margin-top: 1.5rem;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
`;
