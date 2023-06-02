"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function NotFound() {
  const { push } = useRouter();

  useEffect(() => {
    let timer = setTimeout(() => {
      push("/");
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-slate-900">
      <div className="text-center text-white">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
      </div>
    </div>
  );
}
