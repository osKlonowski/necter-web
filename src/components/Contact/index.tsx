import {
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
} from "./ContactElements";

const InfoSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper height={window.innerHeight}>
          <InfoRow imgStart={true}>
            <Column1>
              <TextWrapper>
                <Heading>Contact</Heading>
                <Subtitle>
                  TUNED BKT UG (haftungsbeschrankt)
                  <br />
                  business@necter.io
                  <br />
                  +48887820010
                  <br />
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img
                  src={require("../../images/contact-us-white.svg").default}
                  alt={"contact-us-pic"}
                />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
