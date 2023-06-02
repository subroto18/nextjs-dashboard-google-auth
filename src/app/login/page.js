"use client";
import Login from "../components/login/Login";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import Loading from "../loading";
export default function page() {
  const { data: session } = useSession();

  return session === undefined ? (
    <Loading />
  ) : session !== null ? (
    redirect("/")
  ) : (
    <Login />
  );
}
