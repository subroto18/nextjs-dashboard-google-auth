"use client";
import Calendar from "./components/dashboard/Calendar";
import CircleChart from "./components/dashboard/CircleChart";
import DisPlayCards from "./components/dashboard/DisplayCards";
import WaveChart from "./components/dashboard/WaveChart";
import { redirect } from "next/navigation";

import { useSession } from "next-auth/react";
import Loading from "./loading";
import Body from "./components/common/Body";

export default function page() {
  const { data: session } = useSession();

  return session === undefined ? (
    <Loading />
  ) : session === null ? (
    redirect("/login")
  ) : (
    <Body>
      <div title="Dashboard" className="m-auto">
        <h1 className="text-2xl font-bold mb-5">Dashboard</h1>
        <DisPlayCards />
        <WaveChart />
        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-4  gap-2">
          <CircleChart />
          <Calendar />
        </div>
      </div>
    </Body>
  );
}
