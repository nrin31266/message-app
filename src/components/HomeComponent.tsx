import { userSelector } from "@/redux/userSlice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { MyInfo } from "./../models/UserModel";

const HomeComponent = () => {
  const router = useRouter();
  const myInfo: MyInfo = useSelector(userSelector);
  console.log(myInfo);
  const [userSelected, setUserSelected] = useState("");

  return (
    <div className="chat-container">
      <div className={`chat-left ${userSelected? 'd-none d-md-block' : 'd-block'}`}>
        <div className="menu-left">
          <button onClick={() => router.push("/about")}>A</button>
        </div>
      </div>
      <div className={`chat-body ${userSelected? 'd-block': 'd-none d-md-block'}`}>{myInfo.profile.lastName}</div>
      <div className="chat-right d-none d-xl-block ">c</div>
    </div>
  );
};

export default HomeComponent;
