import { Navbar } from "@components/Navbar/Navbar";
import styled from "@emotion/styled";
import React from "react";
import WebApp from "@twa-dev/sdk";

export const Layout = ({ children }) => {
  const viewportStableHeight = WebApp.viewportStableHeight;
  return (
    <LayoutWrapper>
      <Content windowHeight={viewportStableHeight}>{children}</Content>
      <Navbar />
    </LayoutWrapper>
  );
};

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  height: 100dvh;
  box-sizing: border-box;
`;

export const Content = styled.div<{
  windowHeight: number;
}>`
  height: ${({ windowHeight }) => `calc(${windowHeight} - 80)`};
  overscroll-behavior: contain;
  overflow-y: scroll;
`;
