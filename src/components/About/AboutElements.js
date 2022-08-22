import styled from "styled-components";

export const InfoContrainer = styled.div`
  background: black;
  display: flex;
  max-height: 400px;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
    margin-top: -100px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: 310px;
  width: 100%;
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 1250px;
  }
`;

export const InfoRow = styled.div`
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 50px;
  }
`;

export const Column1 = styled.div`
  text-align: center;
  width: 100%;
`;

export const TextWrapper = styled.div`
  max-width: 1400px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 50px;
  line-height: 1.1;
  font-weight: 600;
  color: white;
  text-shadow: -2px 3px black;
  margin-top: 50px;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 35px;
  font-size: 30px;
  line-height: 34px;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
