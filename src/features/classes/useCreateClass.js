import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditClass } from "../../services/apiClasses";
import toast from "react-hot-toast";

export function useCreateClass() {
  const queryClient = useQueryClient();

  const { mutate: createClass, isLoading: isCreating } = useMutation({
    mutationFn: createEditClass,
    onSuccess: () => {
      toast.success("New class succesfully created");
      queryClient.invalidateQueries({ queryKey: ["classes"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { createClass, isCreating };
}
