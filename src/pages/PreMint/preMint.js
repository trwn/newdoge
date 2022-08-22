import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import contract from "../../contracts/dogeVerse.json";
import Footer from "../../components/Footer";
import Preview from "../../components/Preview";
import Navbar from "../../components/Navbar";
import {
  Button,
  MintBox,
  BottomPin,
  Wrapper,
  InfoWrapper,
  InfoDiv,
  InfoH1,
  InfoP,
} from "./preMintElements";

const contractAddress = "0x4E010E3C8e7E7aA3FD7c41854d43a12f456c4818";
const abi = contract.abi;

const PreMint = () => {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [supply, setSupply] = useState("0");

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
      setCurrentAccount(accounts[0]);
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
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
    } else {
      console.log("no authorized accounts");
    }
  };

  const mintFreeNft = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);

        console.log("Initialize payment");
        let nftTxn = await nftContract.freeMint({
          value: ethers.utils.parseEther("0.00"),
        });

        console.log("Mining... please wait");
        await nftTxn.wait();

        await supplyLeft().wait();

        console.log(
          `Minted, see transaction: https://etherscan.io/tx/${nftTxn.hash}`
        );
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const supplyLeft = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const nftContract = new ethers.Contract(contractAddress, abi, provider);
        const bigNumber = await nftContract.totalSupply();

        setSupply(bigNumber.toString());
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      return;
    }
  };

  const connectWalletButton = () => {
    return <Button onClick={connect}>Connect Wallet</Button>;
  };

  const mintNftButton = () => {
    return <Button onClick={mintFreeNft}>Mint</Button>;
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    supplyLeft();
  }, []);

  return (
    <>
      <Wrapper>
        <Navbar />
        <InfoWrapper>
          <InfoDiv>
            <InfoH1>HURRY GRAB ONE OF THE FIRST 800!</InfoH1>
            <InfoP>
              The first 800 of the DogeVerse collection will be free. This will
              be first come, first serve.
            </InfoP>
          </InfoDiv>
          <MintBox>
            {currentAccount ? mintNftButton() : connectWalletButton()}
            <InfoP>{supply}/800</InfoP>
          </MintBox>
        </InfoWrapper>
        <BottomPin>
          <Preview />
          <Footer />
        </BottomPin>
      </Wrapper>
    </>
  );
};

export default PreMint;
