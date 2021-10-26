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
import Video from "../../videos/necter-promo.mp4";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  return (
    <>
      <HeroContainer height={window.innerHeight} id="home">
        <HeroBg>
          <VideoBg
            autoPlay
            muted
            playsInline={true}
            src={Video}
            typeof={"video/mp4"}
          ></VideoBg>
        </HeroBg>
        {/*
        <HeroContent>
          <HeroH1>The OFFLINE dating app.</HeroH1>
          <HeroP>Tired of swiping? Meet people right here, right now.</HeroP>
          <HeroBtnWrapper>
            <Button to="/download">Download</Button>
          </HeroBtnWrapper>
        </HeroContent>
          */}
        <ScrollEng
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
        >
          <SpecialArrowDown />
        </ScrollEng>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
