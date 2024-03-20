import supabase from "./supabase";

export async function getBookings({ filter }) {
  let querry = supabase
    .from("bookings")
    .select(
      "id,status,classes(name,image,time,description,regularPrice),customers(name,email)"
    );

  if (filter !== null) querry = querry.eq(filter.field, filter.value);

  const { data, error } = await querry;

  if (error) {
    console.error(error);
    throw new Error("Error occured trying to load bookings");
  }
  return data;
}

export async function getBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*,classes(*),customers(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Error occured trying to load bookings");
  }
  return data;
}
