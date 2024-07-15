import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
`;

export const LinkStyled = styled(Link)`
  margin: 4px;
  font-size: 14px;
`;
