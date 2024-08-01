"use client";

import { NoteType } from "@/types/NoteType";
import { useState } from "react";
import Note from "./Note";
const mockNotes = [
  {
    title: "Nota 1",
    content:
      "lorem ipsum dorem dorem dorem dorem dorem dorem dorem dolot sot damer",
  },
  {
    title: "Nota 2",
    content:
      "lorem ipsum dorem doorem ipsum dorem doorem ipsum dorem doorem ipsum dorem dolot sot damer",
  },
  {
    title: "Nota 3",
    content:
      "lorem ipsum dorem dolot sot damersum dorem dolot sot damersum dorem dolot sot damer",
  },
  {
    title: "Nota 4",
    content:
      "lorem ipsum dorem dolot sotum dorem dolot sotum dorem dolot sot damer",
  },
  {
    title: "Nota 4",
    content:
      "lorem ipsum dorem dolot sotum dorem dolot sotum dorem dolot sot damer",
  },
  {
    title: "Nota 4",
    content:
      "lorem ipsum dorem dolot sotum dorem dolot sotum dorem dolot sot damer",
  },
  {
    title: "Nota 4",
    content:
      "lorem ipsum dorem dolot sotum dorem dolot sotum dorem dolot sot damer",
  },
  {
    title: "Nota 4",
    content:
      "lorem ipsum dorem dolot sotum dorem dolot sotum dorem dolot sot damer",
  },
  {
    title: "Nota 4",
    content:
      "lorem ipsum dorem dolot sotum dorem dolot sotum dorem dolot sot damer",
  },
  {
    title: "Nota 4",
    content:
      "lorem ipsum dorem dolot sotum dorem dolot sotum dorem dolot sot damer",
  },
  {
    title: "Nota 4",
    content:
      "lorem ipsum dorem dolot sotum dorem dolot sotum dorem dolot sot damer",
  },
  {
    title: "Nota 4",
    content:
      "lorem ipsum dorem dolot sotum dorem dolot sotum dorem dolot sot damer",
  },
  {
    title: "Nota 4",
    content:
      "lorem ipsum dorem dolot sotum dorem dolot sotum dorem dolot sot damer",
  },
  {
    title: "Nota 4",
    content:
      "lorem ipsum dorem dolot sotum dorem dolot sotum dorem dolot sot damer ipsum dorem dolot sotum dorem dolot sotum dorem dolot sot damer ipsum dorem dolot sotum dorem dolot sotum dorem dolot sot damer ipsum dorem dolot sotum dorem dolot sotum dorem dolot sot damer ipsum dorem dolot sotum dorem dolot sotum dorem dolot sot damer ipsum dorem dolot sotum dorem dolot sotum dorem dolot sot damer ipsum dorem dolot sotum dorem dolot sotum dorem dolot sot damer ipsum dorem dolot sotum dorem dolot sotum dorem dolot sot damer ipsum dorem dolot sotum dorem dolot sotum dorem dolot sot damer",
  },
];

function Notes() {
  const [notes, setNotes] = useState<Array<NoteType>>(mockNotes);

  return (
    <div className="flex w-full h-full flex-col">
      <div className="max-h-full overflow-auto">
        <h1> Notas: </h1>
        <br />
        <div className="flex flex-col gap-2">
          {notes.map((note) => {
            return (
              <>
                <Note title={note.title} content={note.content}></Note>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Notes;
