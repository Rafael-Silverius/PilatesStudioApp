import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

export default function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          {
            value: "paid",
            label: "Paid",
          },
          { value: "unpaid", label: "Unpaid" },
        ]}
      />
    </TableOperations>
  );
}
