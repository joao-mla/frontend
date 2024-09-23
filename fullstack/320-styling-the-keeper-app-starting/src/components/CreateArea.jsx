import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";
import Collapse from "@mui/material/Collapse";

function CreateArea(props) {
  const [isWriting, setIsWriting] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === "content") {
      if (value) setIsWriting(true);
      else setIsWriting(false);
    }

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isWriting && NoteTitle(handleChange, note.title)}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isWriting ? 3 : 1}
        />
        <Zoom in={isWriting}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

function NoteTitle(handleChange, title) {
  return (
    <input
      name="title"
      onChange={handleChange}
      value={title}
      placeholder="Title"
    />
  );
}

export default CreateArea;
