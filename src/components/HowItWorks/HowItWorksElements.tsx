import styled from "styled-components";

interface ContainerSizeProps {
  height: number;
}

interface InfoContainerProps {
  id: any;
}

export const InfoContainer = styled.div<InfoContainerProps>`
  color: #fff;
  background: #fff;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div<ContainerSizeProps>`
  display: grid;
  z-index: 1;
  height: ${({ height }) => `${height - 80}px`};
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  padding: 5px 24px;
  @media screen and (max-width: 768px) {
    margin-bottom: 280px;
  }
`;

export const Img = styled.img`
  width: 100%;
  padding: 10px;
`;

interface InfoRowProps {
  imgStart: boolean;
}

export const InfoRow = styled.div<InfoRowProps>`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  grid-area: col2;
`;
export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;
