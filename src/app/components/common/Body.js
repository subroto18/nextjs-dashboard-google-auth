import React, { Suspense } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import Loading from "../../loading";

const Body = ({ children }) => {
  return (
    <div className="bg-slate-100 p-5">
      {/* // for mobile and small device */}
      <header className="md:hidden">
        <nav className="flex justify-between mb-3">
          <SideBar />
          <Header />
        </nav>
        <Suspense fallback={<Loading />}>
          <div className="col-span-3">{children}</div>
        </Suspense>
      </header>

      {/* // for destop or large device */}

      <div className="hidden md:grid md:grid-cols-4 md:gap-8">
        <SideBar />
        <div className="col-span-3">
          <Header />
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
      </div>
    </div>
  );
};
export default Body;
