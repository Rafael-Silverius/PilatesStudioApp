import Spinner from "../../ui/Spinner";
import { useClasses } from "./useClasses";
import ClassItem from "./ClassItem";

function AllClasses() {
  const { isLoading, classes } = useClasses();
  if (isLoading) return <Spinner />;

  return (
    <>
      {classes.map((item) => (
        <ClassItem item={item} key={item.id} />
      ))}
    </>
  );
}
export default AllClasses;
