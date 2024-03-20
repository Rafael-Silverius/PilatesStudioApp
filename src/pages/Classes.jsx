import styled from "styled-components";
import AllClasses from "../features/classes/AllClasses";
import AddClass from "../features/classes/AddClass";

const StyledHeader = styled.h2`
  text-align: center;
  font-size: 30px;
  margin: 6rem 0 10rem 0;
  @media only screen and (max-width: 900px) {
    margin: 4rem 0;
  }
`;

export default function Classes() {
  return (
    <>
      <StyledHeader>Classes</StyledHeader>
      <AllClasses />
      <AddClass />
    </>
  );
}
