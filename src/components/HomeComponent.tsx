import { useRouter } from "next/navigation";
import React from "react";

const HomeComponent = () => {
  const router = useRouter();
  return (
    <div className="chat-container">
      <div className="menu-left"><button onClick={()=>router.push("/about")}>Ab</button></div>
      <div className="chat-left d-none d-md-block">a</div>
      <div className="chat-body">b</div>
      <div className="chat-right d-none d-xl-block ">c</div>
    </div>
  );
};

export default HomeComponent;
