import styled from "styled-components";

import NavBar from "./NavBar";
import Logo from "./Logo";

const StyledHeader = styled.header`
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  position: sticky;
  top: 0;
  z-index: 2;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-grey-0);
  padding: 1rem 4.8rem;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <NavBar />
    </StyledHeader>
  );
}
