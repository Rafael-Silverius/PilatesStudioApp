import styled from "styled-components";
import BookingsTable from "../features/bookings/BookingsTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";

const StyledHeader = styled.h2`
  text-align: center;
  font-size: 30px;
  margin: 6rem 0 0;
  @media only screen and (max-width: 900px) {
    margin: 4rem 0;
  }
`;

export default function Classes() {
  return (
    <>
      <StyledHeader>Bookings</StyledHeader>
      <BookingTableOperations />
      <BookingsTable />
    </>
  );
}
