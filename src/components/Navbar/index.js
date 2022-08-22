import React from "react";
import logo from "../../images/logo.png";
import { Bg, Logo, ViewNFT } from "./NavbarElements";
import {BrowserRouter as Router, Link} from 'react-router-dom';

function Navbar() {
  return (
 
    <Bg>
      <Link to="/ViewNFT">
      <ViewNFT >My NFTs</ViewNFT>
      </Link>
      <Logo src={logo} />
      
    </Bg>

  );
}

export default Navbar;
