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
} from "../Contact/ContactElements";

const Imprint = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper height={window.innerHeight}>
          <InfoRow imgStart={true}>
            <Column1>
              <TextWrapper>
                <Heading>Imprint</Heading>
                <Subtitle>
                  TUNED BKT UG (haftungsbeschränkt)
                  <br />
                  Grootmoorgraben 4<br />
                  22175 Hamburg
                  <br />
                  Germany
                  <br />
                  Geschaftsfuhrer:
                  <br />
                  Joshua Buse
                  <br />
                  Amtsgericht Hamburg
                  <br />
                  Register-Nummer:
                  <br />
                  HRB 155122
                  <br />
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img
                  src={require("../../images/team.svg").default}
                  alt={"imprint-pic"}
                />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Imprint;
