import styled from "styled-components";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";

import { useForm } from "react-hook-form";
import { useCreateClass } from "./useCreateClass";
import { useEditClass } from "./useEditClass";

const Input = styled.input``;

export default function CreateClassForm({ classToEdit = {}, onCloseModal }) {
  const { isCreating, createClass } = useCreateClass();
  const { isEditing, editClass } = useEditClass();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = classToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;

  function onSubmit(data) {
    if (isEditSession)
      editClass(
        { newClassData: { ...data }, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createClass(
        { ...data, image: data.image[0] },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Class name" error={errors?.name?.message}>
        <Input
          type="text"
          disabled={isWorking}
          id="name"
          {...register("name", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Regular Price" error={errors?.regularPrice?.message}>
        <Input
          type="text"
          disabled={isWorking}
          id="regularPrice"
          {...register("regularPrice", {
            required: "This field is required",
            min: { value: 1, message: "Price should be more than 0" },
          })}
        />
      </FormRow>

      <FormRow label="Description" error={errors?.description?.message}>
        <textarea
          type="number"
          disabled={isWorking}
          id="description"
          {...register("description", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="When" error={errors?.time?.message}>
        <Input
          type="text"
          disabled={isWorking}
          id="time"
          {...register("time", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Class Image">
        <Input
          type="file"
          accept="image/*"
          id="image"
          disabled={isWorking}
          {...register("image", {
            required: isEditSession ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <button
          disabled={isWorking}
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </button>
        <button disabled={isWorking} type="submit">
          {isEditSession ? "Edit Class" : "Add new Class"}
        </button>
      </FormRow>
    </Form>
  );
}
