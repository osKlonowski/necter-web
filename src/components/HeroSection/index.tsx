import React from 'react'
import { HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements';
import Video from '../../videos/hero-video.mp4';
import { Button } from '../ButtonElement';

const HeroSection = () => {
    return (
        <>  
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video}></VideoBg>
                </HeroBg>
                <HeroContent>
                    <HeroH1>
                        The OFFLINE dating app.
                    </HeroH1>
                    <HeroP>
                        Meet new people nearby. First dating app without swiping.
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button to='download'>Download</Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection;
