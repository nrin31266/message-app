"use client";
import { User } from "@/models/UserModel";
import { Avatar, Button, Divider } from "@mui/material";
import React, { useRef, useState } from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import ChatBody from "./ChatBody";
import ChatBottom from "./ChatBottom";

interface Props {
  user: User | undefined;
  onBack: () => void;
}

const Chat = ({ user, onBack }: Props) => {
  const onClose = () => {
    onBack();
  };
  

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      {!user ? (
        <h3>Welcome chat webapp</h3>
      ) : (
        <>
          {/* Header */}
          <div
            className="chat-header d-flex p-2"
            style={{ height: "8%", alignItems: "center" }}
          >
            <Button
              className="d-block d-md-none"
              sx={{ minWidth: "0" }}
              onClick={onClose}
            >
              <ArrowBackRoundedIcon sx={{ fontSize: "2rem" }} />
            </Button>
            <div className="d-flex ml-2">
              <Avatar sx={{ width: 50, height: 50 }} />
              <div>
                <h6>{user.profile.firstName + " " + user.profile.lastName}</h6>
              </div>
            </div>
          </div>
          <Divider />
          <div
            style={{
              backgroundImage: "url('/assets/back.png')", 
              display: "flex",
              flexDirection: "column",
              height: "92%",
            }}
          >
            {/* Content */}
            <ChatBody userSelected={user}/>
            
            {/* Input Bottom */}
            <ChatBottom/>
          </div>
        </>
      )}
    </div>
  );
};

export default Chat;
