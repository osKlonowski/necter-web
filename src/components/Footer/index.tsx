import React from "react";
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
import { FaFacebook } from "react-icons/fa";

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
              <FooterLinkTitle>COMPANY</FooterLinkTitle>
              <FooterLink to="/#/">Contact</FooterLink>
              <FooterLink to="/#/">Privacy Policy - EN</FooterLink>
              <FooterLink to="/#/">Terms & Conditions - EN</FooterLink>
              <FooterLink to="/#/">Privacy Policy - DE</FooterLink>
              <FooterLink to="/#/">Terms & Conditions - DE</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>SOCIAL MEDIA</FooterLinkTitle>
              <FooterLink to="/#/">Instagram</FooterLink>
              <FooterLink to="/#/">Facebook</FooterLink>
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
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
