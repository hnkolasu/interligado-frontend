"use client";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();

  return (
    <div className="flex flex-row gap-2 bg-slate-900 font-sans border-b-[1px] border-solid border-slate-800 text-orange-50 p-8">
      <button
        className="text-stone-50 p-2 px-4 border-[1px] border-solid border-stone-50 rounded-full hover:text-stone-300 hover:border-stone-300 "
        type="button"
        onClick={() => router.push("/")}
      >
        🦀 NicasWare
      </button>
      <button
        className="text-stone-50 p-2 px-4 border-[1px] border-solid border-stone-50 rounded-full hover:text-stone-300 hover:border-stone-300 "
        type="button"
        onClick={() => router.push("/notes")}
      >
        Notas
      </button>
    </div>
  );
}

export default Header;
