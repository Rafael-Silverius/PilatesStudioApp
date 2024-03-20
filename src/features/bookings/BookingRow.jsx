import styled from "styled-components";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useNavigate } from "react-router-dom";

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.p`
  font-weight: 500;
`;
const Email = styled.p`
  font-size: 14px;
`;

function BookingRow({
  booking: {
    id: bookingId,
    status: hasPaid,
    classes: { name: className, time, regularPrice },
    customers: { name: customerName, email },
  },
}) {
  const navigate = useNavigate();

  return (
    <Table.Row>
      <div>{className}</div>
      <Stacked>
        <Name>{customerName}</Name>
        <Email>{email}</Email>
      </Stacked>
      <div>{time}</div>
      <div>{hasPaid ? "Already Paid" : "Unpaid"}</div>
      <div>{regularPrice}</div>
      <Menus.Menu>
        <Menus.Toggle id={bookingId} />
        <Menus.List id={bookingId}>
          <Menus.Button onClick={() => navigate(`/bookings/${bookingId}`)}>
            See details
          </Menus.Button>
          <Menus.Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check in
          </Menus.Button>
        </Menus.List>
      </Menus.Menu>
    </Table.Row>
  );
}

export default BookingRow;
