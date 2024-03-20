import styled from "styled-components";
import { useBooking } from "../bookings/useBooking";
import { useNavigate } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";

const HeaderGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem 4rem;
`;
const Heading = styled.h2``;

export default function CheckinBooking() {
  const navigate = useNavigate();

  const { booking, isLoading } = useBooking();
  if (isLoading) return <Spinner />;

  const { id: bookingId } = booking;

  function handleCheckIn() {}

  return (
    <>
      <HeaderGroup>
        <Heading>Check In#{bookingId}</Heading>
        <Button onClick={() => navigate(-1)}>&larr; Back</Button>
      </HeaderGroup>
      {/* <BookingDataBox booking={booking} /> */}
      <ButtonGroup>
        <Button onClick={handleCheckIn}>Check in booking #{bookingId}</Button>
        <Button variation="secondary" onClick={() => navigate(-1)}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}
