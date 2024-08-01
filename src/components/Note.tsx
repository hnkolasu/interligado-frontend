"use client";
import { NoteType } from "@/types/NoteType";

export default function Note({ title, content }: NoteType) {
  return (
    <div className="flex flex-col p-4 border-solid border-2 rounded-xl border-slate-500 bg-slate-600 gap-4">
      <h1 className="bg-slate-600 font-semibold outline-none overflow-ellipsis">
        {title}
      </h1>
      <span className="bg-slate-600 outline-none font-normal text-base resize-none">
        {content}
      </span>
    </div>
  );
}
