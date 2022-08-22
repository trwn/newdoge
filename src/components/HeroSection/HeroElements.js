import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  position: relative;
  z-index: 1;
  background: black;
  background-image: url("https://i.postimg.cc/nLQ7mpWM/trans-doge.png");
  object-fit: cover;
  padding-top: 50px;
  padding-bottom: 50px;
  max-width: 100%;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background: black;
  max-width: 100%;
  max-height: auto;
  justify-content: center;
  padding-right: 10px;
  border-radius: 15px;


  @media screen and (max-width: 1050px) {
    grid-template-columns: 1fr;
  }
`;

export const Grid = styled.img`
  height: 500px;
  position: relative;
  border-radius: 25px;
  margin-top: auto;
  margin-bottom: auto;
  @media screen and (max-width: 767px) {
    height: 360px;
    width: 360px;
    padding-left: 10px;
  }
`;

export const MintDiv = styled.div`
  height: 480px;
  width: 480px;
  position: relative;
  background: #282828;
  border-radius: 25px;
  margin-top: auto;
  margin-bottom: auto;
  padding-left: 25px;
  @media screen and (max-width: 767px) {
  height: 450px;
  width: 360px;
  }
  
`;

export const MiniAbout = styled.p`
  color: white;
  background: #282828;
  position: relative;
  margin: 10px;
  padding-top: 15px;
  
`;

export const Plus = styled.button`
  width: 35px;
  height: 35px;
  background: #3b3b3b;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  color: black;
  position: relative;
  margin-left: 10px;
  color: #656565;
  font-size: 30px;
  vertical-align: middle;
  line-height: 30px;
  cursor: pointer;
`;

export const Minus = styled.button`
  width: 35px;
  height: 35px;
  background: #3b3b3b;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  color: black;
  position: relative;
  margin-right: 10px;
  color: #656565;
  font-size: 30px;
  vertical-align: middle;
  line-height: 30px;
  cursor: pointer;
`;

export const Input = styled.input`
  height: 34px;
  width: 310px;
  text-align: center;
  font-size: 26px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: inline-block;
  vertical-align: middle;
  background-color: black;
  color: white;
  text-align: center;
  position: relative;
  @media screen and (max-width: 767px) {
    width: 210px;
  }
`;

export const Button = styled.button`
  color: black;
  background: #282828;
  position: relative;
  margin: auto;
  height: 40px;
  width: 440px;
  background: #de9e45;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: 310px;
  }
`;

export const MyNFT = styled.p`
  color: white;
  margin-top: 25px;
  text-align: center;

  @media screen and (max-width: 767px) {
    margin-left: -25px;
  }
`;

export const First = styled.p`
  color: white;
  background: #282828;
  position: relative;
  margin: 10px;
  padding-top: 30px;
`;

export const Then = styled.p`
  color: white;
  background: #282828;
  position: relative;
  margin: 10px;
`;

export const Mint = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  padding-top: 20px;
  @media screen and (max-width: 767px) {
    margin-left: -15px;
  }

`;

export const MintCText = styled.div`
  color: white;
  font-size: 24px;
  position: absolute;
  padding-left: 30px;

  @media screen and (max-width: 767px) {
  width: 310px;
  }
`;

export const PriceText2 = styled.div`
  color: white;
  font-size: 24px;
  position: absolute;
  padding-left: 315px;

  @media screen and (max-width: 767px) {
  padding-left: 240px;
  }
`;

export const MintCText2 = styled.div`
  color: white;
  font-size: 24px;
  position: absolute;
  padding-left: 365px;

  @media screen and (max-width: 767px) {
  padding-left: 230px;
  }
`;

export const PriceText = styled.div`
  color: white;
  font-size: 24px;
  position: absolute;
  padding-left: 30px;
`;

export const Price = styled.div`
  background: #3b3b3b;
  color: white;
  width: 95%;
  height: 10%;
  display: flex;
  margin: 10px;
  align-items: center;
  border-radius: 10px;
  @media screen and (max-width: 767px) {
  width: 310px;
  }
`;

export const Minted = styled.div`
  color: white;
  background: #3b3b3b;
  width: 95%;
  height: 10%;
  display: flex;
  margin-left: 10px;
  margin-top: 10px;
  border-radius: 10px;
  align-items: center;
  vertical-align: middle;
  @media screen and (max-width: 767px) {
  width: 310px;
  }
 
`;

export const MintInput = styled.div`
  display: flex;
  padding: 10px 35px;
  width: 100%;
  position: relative;
  margin-top: 30px;
  align-items: center;

  @media screen and (max-width: 767px) {
    margin-top: 0px;
    
}
`;
