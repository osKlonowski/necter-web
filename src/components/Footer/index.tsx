import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>NECTER</FooterLinkTitle>
              <FooterLink to="/#/">Contact</FooterLink>
              <FooterLink to="/#/">Imprint</FooterLink>
              <FooterLink to="/#/">Frequently Asked Questions</FooterLink>
              <FooterLink to="/download">Download</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>LEGAL</FooterLinkTitle>
              <FooterLink to="/#/">Privacy Policy - EN</FooterLink>
              <FooterLink to="/#/">Terms & Conditions - EN</FooterLink>
              <FooterLink to="/#/">Privacy Policy - DE</FooterLink>
              <FooterLink to="/#/">Terms & Conditions - DE</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              NECTER
            </SocialLogo>
            <WebsiteRights>
              © Copyright TUNED BKT UG {new Date().getFullYear()} - All Rights
              Reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/necterapp"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/necter/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
