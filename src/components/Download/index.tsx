import {
  DownloadPageWrapper,
  PageWrapper,
  DownloadRow,
  Column1,
  Column2,
  TextWrapper,
  DownloadPageHeading,
  ImgWrap,
  Img,
  BadgeBtnWrap,
  BadgeImg,
  TopLine,
} from "./DownloadElements";

const Download = () => {
  return (
    <>
      <DownloadPageWrapper color={"#b4bced"}>
        <PageWrapper height={window.innerHeight}>
          <DownloadRow imgStart={true}>
            <Column1>
              <TextWrapper>
                <TopLine to="/">NECTER</TopLine>
                <DownloadPageHeading>
                  The Offline Dating App.
                </DownloadPageHeading>
                <BadgeBtnWrap>
                  <a
                    href={
                      "https://apps.apple.com/us/app/necter-offline-dating/id1546097364"
                    }
                  >
                    <BadgeImg
                      height={window.innerHeight}
                      src={require("../../assets/ios_badge.png").default}
                      alt={"apple-store-badge"}
                    />
                  </a>
                  <a
                    href={
                      "https://play.google.com/store/apps/details?id=io.tuned.bkt.necter"
                    }
                  >
                    <BadgeImg
                      height={window.innerHeight}
                      src={require("../../assets/android_badge.png").default}
                      alt={"google-store-badge"}
                    />
                  </a>
                </BadgeBtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img
                  src={require("../../assets/mockup-double.png").default}
                  alt={"necter-app-mockup"}
                  height={window.innerHeight}
                />
              </ImgWrap>
            </Column2>
          </DownloadRow>
        </PageWrapper>
      </DownloadPageWrapper>
    </>
  );
};

export default Download;
