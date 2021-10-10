import React from "react";
import {
    HeroBg,
    HeroBtnWrapper,
    HeroContainer,
    HeroContent,
    HeroH1,
    HeroP,
    VideoBg,
    ScrollEng,
    SpecialArrowDown,
} from "./HeroElements";
import Video from "../../videos/hero-video.mp4";
import { Button } from "../ButtonElement";

const HeroSection = () => {
    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video}></VideoBg>
                </HeroBg>
                <HeroContent>
                    <HeroH1>The OFFLINE dating app.</HeroH1>
                    <HeroP>
                        Meet new people nearby. First dating app without swiping.
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button to="download">Download</Button>
                    </HeroBtnWrapper>
                </HeroContent>
                <ScrollEng>
                    <SpecialArrowDown />
                </ScrollEng>
            </HeroContainer>
        </>
    );
};

export default HeroSection;
