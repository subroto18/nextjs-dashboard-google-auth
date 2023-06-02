import React from "react";
import { GoDesktopDownload } from "react-icons/Go";
import { BsTags } from "react-icons/Bs";
import { AiOutlineLike, AiOutlineUsergroupDelete } from "react-icons/Ai";

import Card from "./Card";
const DisPlayCards = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <Card
        title={"Total Revenue"}
        value={"$2,129,430"}
        bgColor={"bg-green-200"}
        icon={GoDesktopDownload}
      />

      <Card
        title={"Total Transactions"}
        value={"1,520"}
        bgColor={"bg-yellow-200"}
        icon={BsTags}
      />

      <Card
        title={"Total Likes"}
        value={"9,721"}
        bgColor={"bg-pink-200"}
        icon={AiOutlineLike}
      />

      <Card
        title={"Total Users"}
        value={"892"}
        bgColor={"bg-violet-200"}
        icon={AiOutlineUsergroupDelete}
      />
    </div>
  );
};

export default DisPlayCards;
