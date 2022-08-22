import React from "react";
import {
  InfoContrainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  Heading,
  Subtitle,
} from "./AboutElements";

const about = () => {
  return (
    <>
      <InfoContrainer id="about">
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <Heading>DogeVerse</Heading>
                <Subtitle>
                DogeVerse is a collection of 8888 unique Doges built on DogeChain.
                  <br></br>
                  <br></br>
                  By Doge degenerates for Doge degenerates.
                </Subtitle>
              </TextWrapper>
            </Column1>
          </InfoRow>
        </InfoWrapper>
      </InfoContrainer>
    </>
  );
};

export default about;
