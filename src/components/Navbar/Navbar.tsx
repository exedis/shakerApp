import { Path } from "@consts/path";
import React from "react";
import {
  LinkContent,
  LinkStyled,
  LinkTitle,
  NavbarWrapper,
} from "./Navbar.styles";
import { GrList, GrMap, GrWorkshop } from "react-icons/gr";

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <LinkStyled to={Path.TO_HOME}>
        <LinkContent>
          <GrMap />
          <LinkTitle>Карта</LinkTitle>
        </LinkContent>
      </LinkStyled>
      <LinkStyled to={Path.TO_EVENTS}>
        <LinkContent>
          <GrList />
          <LinkTitle>Список</LinkTitle>
        </LinkContent>
      </LinkStyled>
      <LinkStyled to={Path.TO_PROFILE}>
        <LinkContent>
          <GrWorkshop />
          <LinkTitle>Профиль</LinkTitle>
        </LinkContent>
      </LinkStyled>
    </NavbarWrapper>
  );
};
