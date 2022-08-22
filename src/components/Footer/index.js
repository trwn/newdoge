import React from "react";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import openSea from "../../images/opensea.png";
import { animateScroll as scroll } from "react-scroll";
import logo from "../../images/logo.png";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  Info,
  SocialIcons,
  SocialIconsLink,
  IconImg,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo onClick={toggleHome} src={logo}></SocialLogo>

            <Info>
              DogeVerse&copy; 2022
              <br></br>
              Contract address: 0xdda9c6990864f282c4E0B4b4F5E550C3B6c1bfd0
            </Info>
            <SocialIcons>
              <SocialIconsLink href="" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconsLink>
              {/* <SocialIconsLink href="" target="_blank" aria-label="Discord">
                <FaDiscord />
              </SocialIconsLink>
              <SocialIconsLink href="" target="_blank" aria-label="OpenSea">
                <IconImg src={openSea}></IconImg>
              </SocialIconsLink> */}
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
