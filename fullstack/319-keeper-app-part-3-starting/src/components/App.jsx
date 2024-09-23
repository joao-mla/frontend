import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [notes, setNotes] = useState([]);

  function updateNotes(note) {
    note.id = uuidv4();
    setNotes((prev) => {
      return [...prev, note];
    });
  }

  function deleteNote(id) {
    setNotes(
      notes.filter((note) => {
        return note.id !== id;
      })
    );
  }

  return (
    <div>
      <Header />
      <CreateArea onClick={updateNotes} />
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          onClick={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
