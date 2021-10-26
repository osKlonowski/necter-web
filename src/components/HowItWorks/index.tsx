import {
  Column1,
  Column2,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
} from "./HowItWorksElements";

const HowItWorksSection = () => {
  return (
    <>
      <InfoContainer id='services'>
        <InfoWrapper height={window.innerHeight}>
          <InfoRow imgStart={false}>
            <Column1>
              <ImgWrap>
                <Img
                  src={require("../../assets/howitworks-1.png").default}
                  alt={"how-it-works-pic"}
                />
              </ImgWrap>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img
                  src={require("../../assets/howitworks-2.png").default}
                  alt={"how-it-works-pic"}
                />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default HowItWorksSection;
