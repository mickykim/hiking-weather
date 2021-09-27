type Data = {
    id: string;
    topText: string;
    heading: string;
    subtitle: string;
    colorTheme: boolean;
    reverse: boolean;
    img: string;
    altImg: string;
};

export const aboutData: Data = {
    id: "section1",
    topText: "explore",
    heading: "Plan your adventure",
    subtitle: `Think of your next hiking desination and we will 
    tell you the current hiking conditions.`,
    colorTheme: false,
    reverse: false,
    img: require("../../assets/images/hikingSecondary.svg").default,
    altImg: "weather",
};

export const airData: Data = {
    id: "section2",
    topText: "Analyze",
    heading: "Science you can trust",
    subtitle: `We calculate the air quality by checking current 
    air conditions with respect to the general guidelines provided 
    on air quality.`,
    colorTheme: true,
    reverse: true,
    img: require("../../assets/images/hiking.svg").default,

    altImg: "weather",
};
