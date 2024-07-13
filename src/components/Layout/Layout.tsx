import { Navbar } from "@components/Navbar/Navbar";
import styled from "@emotion/styled";
import React from "react";

export const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Content>{children}</Content>
      <Navbar />
    </LayoutWrapper>
  );
};

export const LayoutWrapper = styled.div`
  padding: 10px;
  overflow: hidden;
  height: 100svh;
  box-sizing: border-box;
`;

export const Content = styled.div`
  min-height: calc(100vh - 80px);
`;
