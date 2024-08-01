"use client";
import Notes from "@/components/Notes";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function NotePage() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key == "Enter") {
      evt.preventDefault();
      document.getElementById("textarea")?.focus();
    }
  };

  return (
    <main className="flex items-start justify-center text-2xl font-semibold p-8 gap-12">
      <div className="flex flex-col p-4 border-solid border-2 rounded-xl border-slate-500 bg-slate-600 gap-4">
        <input
          onKeyDown={handleKeyDown}
          placeholder="Insira o título aqui..."
          className="bg-slate-600 outline-none overflow-ellipsis"
          value={title}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextareaAutosize
          id="textarea"
          placeholder="Criar uma nota..."
          className="bg-slate-600  outline-none font-normal text-base max-w-[400px] resize-none "
          value={content}
          onChange={(e: any) => setContent(e.target.value)}
          maxRows={15}
          cols={100}
        />
        <div className="flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-semibold py-2 px-4 rounded-xl ">
            Salvar
          </button>
        </div>
      </div>
      <Notes></Notes>
    </main>
  );
}
