import styled from "styled-components";
import { Link } from "react-router-dom";

interface ContainerSizeProps {
  height: number;
}

interface DonwloadPageProps {
  color: String;
}

export const DownloadPageWrapper = styled.div<DonwloadPageProps>`
  background: ${({ color }) => color};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const PageWrapper = styled.div<ContainerSizeProps>`
  display: grid;
  z-index: 1;
  height: ${({ height }) => `${height}px`};
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  padding: 5px 24px;
`;

interface DownloadRowProps {
  imgStart: boolean;
}

export const DownloadRow = styled.div<DownloadRowProps>`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 850px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  margin-right: 80px;
  padding: 0 15px;
  grid-area: col2;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    margin-right: 0px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 0;
  padding-bottom: 60px;
`;
export const DownloadPageHeading = styled.h1`
  margin-bottom: 30px;
  text-align: left;
  font-size: 44px;
  line-height: 1.1;
  font-weight: bold;
  color: "#000000";

  @media screen and (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const TopLine = styled(Link)`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  font-size: 20px;
  line-height: 16px;
  font-weight: bold;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 26px;

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 24px;
  }
`;

export const BadgeBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const BadgeImg = styled.img<ImgProps>`
  margin: 10px;
  height: ${({ height }) => `${height * 0.1}px`};
  resizemode: "contain";

  @media screen and (max-width: 768px) {
    height: ${({ height }) => `${height * 0.08}px`};
  }
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

interface ImgProps {
  height: number;
}

export const Img = styled.img<ImgProps>`
  flex: 1;
  height: ${({ height }) => `${height * 0.75}px`};
  align-self: center;
  margin: 12px 0 10px 0;
  padding-right: 0;
  resizemode: "contain";
`;
