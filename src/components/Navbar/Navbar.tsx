import { Path } from "@consts/path";
import React from "react";
import { LinkStyled, NavbarWrapper } from "./Navbar.styles";

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <LinkStyled to={Path.TO_HOME}>События на карте</LinkStyled>
      <LinkStyled to={Path.TO_EVENTS}>События списком</LinkStyled>
      <LinkStyled to={Path.TO_PROFILE}>Профиль</LinkStyled>
    </NavbarWrapper>
  );
};
