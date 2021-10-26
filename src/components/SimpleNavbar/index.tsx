import { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavLogo,
  LogoImg,
  LogoImgWrap,
  CompanyRefContainer,
} from "../Navbar/NavbarElements";
import { animateScroll as scroll } from "react-scroll";

import NecterLogo from "../../assets/logo_white_transparent.png";

const SimpleNavBar = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <CompanyRefContainer>
            <LogoImgWrap>
              <LogoImg
                src={NecterLogo}
                alt={"necter-logo"}
                onClick={toggleHome}
              />
            </LogoImgWrap>
            <NavLogo to="/" onClick={toggleHome}>
              NECTER
            </NavLogo>
          </CompanyRefContainer>
          <NavBtn>
            <NavBtnLink to="/download">Download</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};
export default SimpleNavBar;
