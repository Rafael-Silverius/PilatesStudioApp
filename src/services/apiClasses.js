import toast from "react-hot-toast";
import supabase from "./supabase";
import { supabaseUrl } from "./supabase";
export async function getClasses() {
  const { data, error } = await supabase.from("classes").select("*");

  if (error) {
    console.error(error);
    throw new Error("Classes could not be loaded from server ..");
  }
  return data;
}

export async function createEditClass(newClass, id) {
  //https://mahizgnjhbovajcriyjz.supabase.co/storage/v1/object/public/images/pexels-cliff-booth-4057526.jpg

  const imageName = `${Math.random()}-${newClass.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/images/${imageName}`;

  //create/edit class
  let query = supabase.from("classes");

  //Create new class
  if (!id) query = query.insert([{ ...newClass, image: imagePath }]);

  //Edit Class
  if (id) query = query.update({ ...newClass }).eq("id", id);

  const { data, error } = await query.select();
  if (error) {
    console.error(error);
    throw new Error("Classes could not be created ..");
  }

  //upload image
  const { error: storageError } = await supabase.storage
    .from("images")
    .upload(imageName, newClass.image);

  //Delete cabin if error on uploading
  if (storageError) {
    await supabase.from("classes").delete().eq("id", id);
    toast.error("Error on uploading img");
  }

  return data;
}

export async function deleteClass(id) {
  const { data, error } = await supabase.from("classes").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Classes could not be created ..");
  }
  return data;
}
