import styled from "styled-components";

const StyledFooter = styled.footer`
  border-top: 1px solid var(--color-grey-200);
  background-color: var(--color-grey-100);
  padding: 3rem 0;
`;

const FooterText = styled.p`
  text-align: center;
  font-size: 1.4rem;
  font-weight: 300;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <FooterText>&copy;Copyright 2024</FooterText>
    </StyledFooter>
  );
}
