import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";

interface HeroContainerProps {
  height: number;
}

export const HeroContainer = styled.div<HeroContainerProps>`
  background: #9ca7ec;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: ${({ height }) => `${height}px`};
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }
`;

export const SpecialArrowDown = styled(FaArrowDown)`
  color: #fff;
  margin: 25px;
  height: 20px;
  width: 20px;
`;

export const ScrollEng = styled(LinkS)`
  z-index: 4;
  text-decoration: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  align-self: center;
  justify-self: end;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #9ca7ec;

  @media screen and (max-width: 1100px) {
    -o-object-fit: contain;
    object-fit: contain;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
