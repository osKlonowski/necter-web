import React from 'react'
import { Button } from '../ButtonElement'
import { BtnWrap, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './InfoElements'

const InfoSection = (props : {
    id: string;
    lightBg: boolean;
    lightText: boolean;
    lightTextDesc: boolean;
    topLine: string;
    headline: string;
    description: string;
    buttonLable: string;
    imgStart: boolean;
    img: any;
    alt: string;
    dark: boolean;
    primary: boolean;
    darkText: boolean;
}) => {
    return (
        <>
            <InfoContainer id={props.id} lightBg={props.lightBg}>
                <InfoWrapper>
                    <InfoRow imgStart={props.imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>
                                    {props.topLine}
                                </TopLine>
                                <Heading lightText={props.lightText}>
                                    {props.headline}
                                </Heading>
                                <Subtitle darkText={props.darkText}>
                                    {props.description}
                                </Subtitle>
                                <BtnWrap>
                                    <Button 
                                        to='home' 
                                        smooth={true} 
                                        spy={true}
                                        duration={500}
                                        offset={-80}
                                    >{props.buttonLable}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={props.img} alt={props.alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
