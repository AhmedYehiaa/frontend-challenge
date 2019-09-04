import React from "react";
import styled from "@emotion/styled";
import logo from "../images/adviqo-logo.png";

const HeaderWrapper = styled.header`
  z-index: 1;
  width: 100%;
  background: linear-gradient(135deg, #cbbfda, #fff);
`;

const HeaderElement = styled.div`
  max-width: 75%;
  margin: auto;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderElement>
        <img src={logo} alt="logo" />
      </HeaderElement>
    </HeaderWrapper>
  );
};

export default Header;
