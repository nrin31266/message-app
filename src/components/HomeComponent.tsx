import { userSelector } from "@/redux/userSlice";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import { MyInfo } from "./../models/UserModel";

const HomeComponent = () => {
  const router = useRouter();
  const myInfo: MyInfo = useSelector(userSelector);
  console.log(myInfo)
  return (
    <div className="chat-container">
      <div className="menu-left">
        <button onClick={() => router.push("/about")}>Ab</button>
      </div>
      <div className="chat-left d-none d-md-block">a</div>
      <div className="chat-body">{myInfo.profile.lastName}</div>
      <div className="chat-right d-none d-xl-block ">c</div>
    </div>
  );
};

export default HomeComponent;
