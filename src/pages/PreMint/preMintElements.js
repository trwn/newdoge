import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: wheat;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  height: auto;
  position: relative;

`;

export const InfoWrapper = styled.div`
  background: black;
  display: flex;
  flex-direction: row;
  height: auto;
  
`;

export const InfoDiv = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 50px;

  
`;

export const InfoH1 = styled.h1`
  color: white;
`;

export const InfoP = styled.div`
  padding-top: 25px;
  color: white;
`;

export const MintBox = styled.div`
  margin: auto;
  width: 100%;
  text-align: center;
  padding-top: 50px;
`;

export const Button = styled.button`
  background-color: #de9e45;
  padding: 15px;
  border: none;
  border-radius: 12px;
  min-width: 250px;
  color: black;
  font-size: 18px;
  cursor: pointer;
`;

export const BottomPin = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
`;
