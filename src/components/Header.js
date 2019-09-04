import React from "react";
import styled from "@emotion/styled";

const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 1000;
  width: 100%;
  background: linear-gradient(135deg, #7363dc, #bd63dc);
  padding: 0 20px;
`;

const Header = () => {
  return <HeaderWrapper>Header</HeaderWrapper>;
};

export default Header;
