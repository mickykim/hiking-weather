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
    heading: "Plan your journey",
    subtitle: `Think of your next hiking desination and we will 
    tell you the current hiking conditions.`,
    colorTheme: false,
    reverse: false,
    img: require("../../assets/images/weather.svg").default,
    altImg: "weather",
};

export const airData: Data = {
    id: "section2",
    topText: "breathe it in",
    heading: "Air Quality",
    subtitle: `We calculate the air quality by checking current 
    air conditionswith respect to the general guidelines provided 
    on air quality.`,
    colorTheme: false,
    reverse: true,
    img: require("../../assets/images/hikingSecondary.svg").default,

    altImg: "weather",
};

export const mayoData: Data = {
    id: "section3",
    topText: "pogchamp",
    heading: "So. Much. MAYO!",
    subtitle: `I know. Shit's crazy. But I respect the kind of
    person that would go out and say "Fuck it, I
    love my mayo and I will eat my mayo." So you go
    do it. Get your mayo.`,
    colorTheme: false,
    reverse: false,
    img: require("../../assets/images/soMuchMayo.jpg").default,
    altImg: "mayo",
};
