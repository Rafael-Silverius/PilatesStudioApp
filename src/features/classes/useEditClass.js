import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditClass } from "../../services/apiClasses";

export function useEditClass() {
  const queryClient = useQueryClient();

  const { mutate: editClass, isLoading: isEditing } = useMutation({
    mutationFn: ({ newClassData, id }) => createEditClass(newClassData, id),
    onSuccess: () => {
      toast.success("Class was succesfully edited");
      queryClient.invalidateQueries({ queryKey: ["classes"] });
    },
    onError: (err) => {
      console.log(err.message);
    },
  });
  return { isEditing, editClass };
}
