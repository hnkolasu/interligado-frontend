"use client";
import Notes from "@/components/Notes";
import { useCallback, useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { api } from "@/api";

// Utility function for debouncing
const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default function NotePage() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isSaving, setIsSaving] = useState(false);

  const debouncedTitle = useDebounce(title, 1000);
  const debouncedContent = useDebounce(content, 1000);

  const saveNote = useCallback(async () => {
    if (!title && !content) return;

    setIsSaving(true);
    try {
      await api.post("/create-note", {
        title,
        content,
      });
    } catch (error) {
      console.error("Erro ao salvar nota:", error);
    } finally {
      setIsSaving(false);
    }
  }, [title, content]);

  useEffect(() => {
    if (debouncedTitle || debouncedContent) {
      saveNote();
    }
  }, [debouncedTitle, debouncedContent, saveNote]);

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
          <button
            onClick={saveNote}
            disabled={isSaving}
            className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-semibold py-2 px-4 rounded-xl disabled:opacity-50"
          >
            {isSaving ? "Salvando..." : "Salvar"}
          </button>
        </div>
      </div>
      <Notes></Notes>
    </main>
  );
}
