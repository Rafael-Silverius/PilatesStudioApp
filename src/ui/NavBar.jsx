import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav``;

const NavList = styled.ul`
  display: flex;
  /* gap: 5rem; */
  /* padding: 1rem 2rem; */
  @media only screen and (max-width: 600px) {
    position: absolute;
    background-color: var(--color-grey-200);
    flex-direction: column;
    align-items: start;
  }
`;
const NavItem = styled.li`
  @media only screen and (max-width: 600px) {
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }
`;

export default function NavBar() {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <StyledNavLink to="/">Home</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="classes">Available Classes</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="bookings">Bookings</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="blog">Blog</StyledNavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
}
