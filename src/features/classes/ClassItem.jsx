import styled from "styled-components";

import CreateClassForm from "./CreateClassForm";
import { useDeleteClass } from "./useDeleteClass";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menus from "../../ui/Menus";
import { HiPencilAlt } from "react-icons/hi";
import { HiTrash } from "react-icons/hi2";

const ClassBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 10rem;
  border-bottom: 1px solid var(--color-grey-100);

  &:nth-of-type(2n) {
    flex-direction: row-reverse;
  }
`;

const ClassLeft = styled.div`
  width: 260px;
  border: none;
`;

const ClassImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-md);
  filter: drop-shadow(8px 8px 5px var(--color-grey-300));
`;

const ClassRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 400px;
  line-height: 3rem;
`;

const ClassRTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: var(--color-grey-100);
  border-bottom: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  padding: 2rem 4rem;
  box-shadow: 2px 2px 2px var(--color-grey-200);
`;

const ClassRBot = styled.div`
  background-color: var(--color-grey-100);
  border-bottom: 1px solid var(--color-grey-200);
  box-shadow: 2px -2px 2px var(--color-grey-200);
  border-radius: var(--border-radius-md);
  padding: 2rem 4rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const ClassName = styled.h2`
  text-align: center;
`;

const ClassText = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
`;
const BtnContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;

export default function ClassItem({ item }) {
  const { id: classId, name, description, regularPrice, image, time } = item;
  const { isDeleting, deleteClass } = useDeleteClass();

  return (
    <ClassBox>
      <ClassLeft>
        <ClassImg src={image}></ClassImg>
      </ClassLeft>
      <ClassRight>
        <ClassRTop>
          <ClassName>{name}</ClassName>
          <ClassText>{description}</ClassText>
        </ClassRTop>
        <ClassRBot>
          <ClassText>
            {regularPrice}€ per class <br />
            {time}
          </ClassText>
        </ClassRBot>
        <Modal>
          <Menus>
            <Menus.Menu>
              <Menus.Toggle id={classId} />
              <Menus.List id={classId}>
                <Modal.Open opens="edit">
                  <Menus.Button icon={<HiPencilAlt />}>Edit</Menus.Button>
                </Modal.Open>
                <Modal.Open opens="delete">
                  <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name="edit">
                <CreateClassForm classToEdit={item} />
              </Modal.Window>

              <Modal.Window name="delete">
                <ConfirmDelete
                  resourceName="class"
                  onConfirm={() => deleteClass(classId)}
                />
              </Modal.Window>
            </Menus.Menu>
          </Menus>
        </Modal>
      </ClassRight>
    </ClassBox>
  );
}
