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

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>SAFETY</FooterLinkTitle>
              <FooterLink to="/#/">Frequently Asked Questions</FooterLink>
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
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>COMPANY</FooterLinkTitle>
              <FooterLink to="/#/">Contact</FooterLink>
              <FooterLink to="/#/">Imprint</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">NECTER</SocialLogo>
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
