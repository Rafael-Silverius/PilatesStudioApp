import Spinner from "../../ui/Spinner";

import Menus from "../../ui/Menus";
import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Empty from "../../ui/Empty";
import { useBookings } from "./useBookings";
import { useSearchParams } from "react-router-dom";

export default function BookingsTable() {
  const { isLoading, bookings } = useBookings();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!bookings.length) return <Empty resource="bookings" />;

  const filterValue = searchParams.get("status") || "all";

  let filteredBookings;
  if (filterValue == "all") filteredBookings = bookings;
  if (filterValue == "paid")
    filteredBookings = bookings.filter((booking) => booking.status == true);
  if (filterValue == "unpaid")
    filteredBookings = bookings.filter((booking) => booking.status == false);

  return (
    <Menus>
      <Table columns="0.6fr 1fr 1fr 1fr 1fr 1fr">
        <Table.Header>
          <div>Class name</div>
          <div>Customer </div>
          <div>Time</div>
          <div>Status</div>
          <div>Price</div>
        </Table.Header>

        <Table.Body
          data={filteredBookings}
          render={(booking) => (
            <BookingRow booking={booking} key={booking.id} />
          )}
        />
      </Table>
    </Menus>
  );
}
