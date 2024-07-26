"use client";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();

  return (
    <div className="flex flex-row justify-between bg-green-950 font-sans text-orange-50 p-8">
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
        onClick={() => router.push("/sobre")}
      >
        Sobre
      </button>
      <button
        className="text-stone-50 p-2 px-4 border-[1px] border-solid border-stone-50 rounded-full hover:text-stone-300 hover:border-stone-300 "
        type="button"
        onClick={() => router.push("/blog")}
      >
        Blog
      </button>
      <button
        className="text-stone-50 p-2 px-4 border-[1px] border-solid border-stone-50 rounded-full hover:text-stone-300 hover:border-stone-300 "
        type="button"
        onClick={() => router.push("/design")}
      >
        Design
      </button>
      <button
        className="text-stone-50 p-2 px-4 border-[1px] border-solid border-stone-50 rounded-full hover:text-stone-300 hover:border-stone-300 "
        type="button"
        onClick={() => router.push("/desenvolvimento")}
      >
        Desenvolvimento
      </button>
    </div>
  );
}
export default Header;
