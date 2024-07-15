import { Navbar } from "@components/Navbar/Navbar";
import styled from "@emotion/styled";
import React from "react";
import WebApp from "@twa-dev/sdk";

export const Layout = ({ children }) => {
  const viewportStableHeight = WebApp.viewportStableHeight;
  return (
    <LayoutWrapper windowHeight={viewportStableHeight}>
      <Content>{children}</Content>
      <Navbar />
    </LayoutWrapper>
  );
};

export const LayoutWrapper = styled.div<{
  windowHeight: number;
}>`
  padding: 10px;
  overflow: hidden;
  height: ${({ windowHeight }) => windowHeight}px;

  box-sizing: border-box;
`;

export const Content = styled.div`
  height: calc(96vh - 80px);
  overscroll-behavior: contain;
`;
