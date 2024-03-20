import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useBooking } from "./useBooking";
import Spinner from "../../ui/Spinner";
const HeaderGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem 4rem;
`;
const Heading = styled.h2``;

const ButtonTxt = styled.button``;

const Tag = styled.span`
  width: fit-content;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;

  /* Make these dynamic, based on the received prop */
  color: var(--color-${(props) => props.type}-700);
  background-color: var(--color-${(props) => props.type}-100);
`;

export default function SingleBookingDetails() {
  const navigate = useNavigate();

  const { booking, isLoading } = useBooking();

  if (isLoading) return <Spinner />;

  const { id: bookingId, status } = booking;

  const statusToTagName = {
    true: "blue",
    false: "red",
  };

  return (
    <>
      <HeaderGroup>
        <Heading>Booking #{bookingId}</Heading>
        <Tag type={statusToTagName[status]}>
          Status: {status ? "Paid" : "unpaid"}
        </Tag>
        <ButtonTxt onClick={() => navigate(-1)}>&larr; Back</ButtonTxt>
      </HeaderGroup>
    </>
  );
}
