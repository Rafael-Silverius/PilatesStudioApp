import styled from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  align-items: center;
  padding-bottom: 2rem;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

export default function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {{ label } && <Label htmlFor={children?.props?.id}>{label}</Label>}
      {children}
      {{ error } && <Error>{error}</Error>}
    </StyledFormRow>
  );
}
