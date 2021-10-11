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
import Video from "../../videos/couple-dancing.mp4";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  return (
    <>
      <HeroContainer height={window.innerHeight} id="home">
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video}></VideoBg>
        </HeroBg>
        <HeroContent>
          <HeroH1>The OFFLINE dating app.</HeroH1>
          <HeroP>Tired of swiping? Meet people right here, right now.</HeroP>
          <HeroBtnWrapper>
            <Button to="/download">Download</Button>
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
