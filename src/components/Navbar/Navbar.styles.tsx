import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
`;

export const LinkStyled = styled(Link)`
  margin: 4px;
`;

export const LinkTitle = styled.div`
  font-size: 14px;
  margin-left: 6px;
`;
export const LinkContent = styled.div`
  display: flex;
  align-items: center;
`;
