import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  font-weight: 700;
  font-size: 3rem;
`;

export default function Logo() {
  return (
    <div>
      <StyledNavLink to="/">Pilates Studio</StyledNavLink>
    </div>
  );
}
