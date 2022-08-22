import React, { useState, useEffect } from "react";
import axios from "axios";
import { ethers } from "ethers";
import contract from "../../contracts/dogeVerse.json";
import Footer from "../../components/Footer";
import {
  PreBg,
  PreLogo,
  MintDiv,
  ViewNFTs,
  Div,
  Connect,
  Div2,
  YourNFTS,
  YourNFTSdata,
  Container,
} from "./viewNFTElements";
import logo from "../../images/logo.png";
import {
  BrowserRouter as Router,
  Link,
  NavigationType,
} from "react-router-dom";
import { render } from "@testing-library/react";

const contractAddress = "0xdda9c6990864f282c4E0B4b4F5E550C3B6c1bfd0";
const abi = contract.abi;

const ViewNFT = () => {
  const [connected, setConnected] = useState("Connect Wallet");
  const [nfts, setNft] = useState([]);
  const [render, setRender] = useState([]);

  const connect = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Found an account! Address: ", accounts[0]);
      setConnected(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Metamask is isntalled! We're ready to go!");
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      setConnected(accounts[0]);

      console.log("Found an authorized account:", accounts[0]);
    } else {
      console.log("no authorized accounts");
    }
  };

  const getMintedNFT = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);

        const balance = await nftContract.balanceOf(connected);
        let tokenURIs = [];

        for (let i = 0; i < balance; i++) {
          const URI = await nftContract.tokenOfOwnerByIndex(connected, i);
          const x = URI.toNumber();

          tokenURIs.push(x);
          const tokenUri = await nftContract.tokenURI(tokenURIs[i]);
          const info = await axios.get(tokenUri);
          const meta = info.data;
          nfts.push(meta);
        }

        generateCard();
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const generateCard = () => {
    setRender(
      nfts.map((nft, index) => (
        <div key={index}>
          <Container>
            <YourNFTS src={nft.image}></YourNFTS>
            <YourNFTSdata>{nft.name}</YourNFTSdata>
          </Container>
        </div>
      ))
    );
  };

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <>
      <PreBg>
        <Link to="/">
          <ViewNFTs>Home</ViewNFTs>
        </Link>
        <PreLogo src={logo}></PreLogo>
      </PreBg>
      <MintDiv>
        <Div className="App">
          <Connect
            onClick={connect}
            value={connected}
            onChange={(e) => setConnected(e.target.value)}
          >
            Connect
          </Connect>

          <Connect
            disabled={disabled}
            onClick={() => {
              setDisabled(true);
              getMintedNFT();
            }}
          >
            View NFTs
          </Connect>
          <Div2>{render}</Div2>
        </Div>
      </MintDiv>
      <Footer />
    </>
  );
};

export default ViewNFT;
