import { useRef } from "react";

const inputStyle =
  "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
const labelStyle = "text-sm font-bold uppercase text-stone-500";
const cancelButton = "text-stone-800 hover:text-stone-950";
const saveButton =
  "px-6 py-2 mx-3 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950";
const formStyle = "mt-4 text-right";

export default function Content({ project, saveProject, onResetSelection }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  let title = "";
  let description = "";
  let dueDate = "";

  if (project) {
    title = project.title;
    description = project.description;
    dueDate = project.dueDate;
  }

  if (titleRef.current) titleRef.current.value = title;

  if (descriptionRef.current) descriptionRef.current.value = description;

  if (dueDateRef.current) dueDateRef.current.value = dueDate;

  function handleSaveProject(event) {
    saveProject({
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
      id: project?.id,
    });
    resetState();
    event.preventDefault();
  }

  function resetState() {
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    dueDateRef.current.value = "";

    onResetSelection();
  }

  function handleCancelClick(event) {
    resetState();
    event.preventDefault();
  }

  return (
    <form action="submit">
      <div className={formStyle}>
        <button className={cancelButton} onClick={handleCancelClick}>
          Cancel
        </button>
        <button className={saveButton} onClick={handleSaveProject}>
          Save
        </button>
      </div>
      <div>
        <label className={labelStyle}>Title</label>
        <input
          ref={titleRef}
          className={inputStyle}
          type="text"
          defaultValue={title}
        />
        <label className={labelStyle}>Description</label>
        <input
          ref={descriptionRef}
          className={inputStyle}
          type="text"
          defaultValue={description}
        />
        <label className={labelStyle}>Due Date</label>
        <input
          ref={dueDateRef}
          className={inputStyle}
          type="date"
          defaultValue={dueDate}
        />
      </div>
    </form>
  );
}
