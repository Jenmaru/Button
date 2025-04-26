import Image from "next/image";
import Button from "./main.jsx";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-2 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Бобров обжаловать на счетчик мотиваций для не самых устойчивых! Да прибудет с вами сила!</h1>
      <Button />
    </div>
  );
}
