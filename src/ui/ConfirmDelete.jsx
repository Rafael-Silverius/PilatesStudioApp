export default function ConfirmDelete({
  resourceName,
  onConfirm,
  onCloseModal,
}) {
  return (
    <>
      <div>
        <h3>Delete</h3>
        <p>Are you sure you want to delete this {resourceName} permanently ?</p>
      </div>
      <div>
        <button onClick={onCloseModal}>Cancel</button>
        <button onClick={onConfirm}>Delete</button>
      </div>
    </>
  );
}
