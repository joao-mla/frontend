import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function resetNote() {
    setNote({
      title: "",
      content: "",
    });
  }

  function updateNote(evt) {
    const { value, name } = evt.target;

    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={updateNote}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={updateNote}
          value={note.content}
        />
        <button
          onClick={(event) => {
            props.onClick(note);
            resetNote();
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
