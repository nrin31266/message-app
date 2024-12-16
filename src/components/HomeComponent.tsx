import { userSelector } from "@/redux/userSlice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { MyInfo, User } from "./../models/UserModel";
import ChatLeft from "./ChatLeft";
import Chat from "./Chat";

const HomeComponent = () => {
  const router = useRouter();
  const myInfo: MyInfo = useSelector(userSelector);
  console.log(myInfo);
  const [userSelected, setUserSelected] = useState<User>();

  return (
    <div className="chat-container">
      <div
        className={`chat-left ${
          userSelected ? "d-none d-md-block" : "d-block"
        }`}
      >
        <ChatLeft onClickUser={(v) => setUserSelected(v)} />
      </div>
      <div
        className={`chat-body ${
          userSelected ? "d-block" : "d-none d-md-block"
        }`}
      >
        <Chat onBack={() => setUserSelected(undefined)} user={userSelected} />
      </div>
      <div className="chat-right d-none d-xl-block ">c</div>
    </div>
  );
};

export default HomeComponent;
