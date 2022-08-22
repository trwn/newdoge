import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #de9e45;
  align-items: center;
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled.img`
  justify-self: start;
  cursor: pointer;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  height: 60px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  margin-right: 0px; //was 50
  margin-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const SocialIconsLink = styled.a`
  color: white;
  font-size: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const IconImg = styled.img`
  width: 24px;
`;

export const Info = styled.p`
  color: white;
  display: flex;
  font-size: 12px;
  justify-content: center;
  text-align: center;
  align-items: center;
  line-height: 30px;
  padding-top: 10px;
  padding-bottom: 10px;

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;
