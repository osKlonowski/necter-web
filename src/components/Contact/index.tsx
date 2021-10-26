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

const Contact = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper height={window.innerHeight}>
          <InfoRow imgStart={true}>
            <Column1>
              <TextWrapper>
                <Heading>Contact</Heading>
                <Subtitle>
                  business@necter.io
                  <br />
                  <br />
                  +49 898 234 827
                  <br />
                  +48 887 820 010
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

export default Contact;
