import styled from "styled-components";
import CreateClassForm from "./CreateClassForm";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";

const Button = styled.button`
  border: none;
  border-radius: 2rem;
  background-color: var(--color-blue-100);
  padding: 0.8rem 2rem;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 1.4rem;
  transition: all 0.3s;

  &:hover {
    background-color: var(--color-blue-700);
    color: var(--color-grey-0);
  }
`;

export default function AddClass() {
  return (
    <Menus>
      <Modal>
        <Modal.Open opens="class-form">
          <Button>Add new Class</Button>
        </Modal.Open>
        <Modal.Window name="class-form">
          <CreateClassForm />
        </Modal.Window>
      </Modal>
    </Menus>
  );
}
