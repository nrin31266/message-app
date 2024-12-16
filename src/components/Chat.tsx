"use client";
import { User } from "@/models/UserModel";
import { Avatar, Button, Divider } from "@mui/material";
import React, { useState } from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import KeyboardVoiceRoundedIcon from "@mui/icons-material/KeyboardVoiceRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";

interface Props {
  user: User | undefined;
  onBack: () => void;
}

const Chat = ({ user, onBack }: Props) => {
  const onClose = () => {
    onBack();
  };
  const [message, setMessage] = useState("");

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
              backgroundColor: "#F4F3F3",
              display: "flex",
              flexDirection: "column",
              height: "92%",
            }}
          >
            {/* Content */}
            <div
              className="chat-content"
              style={{ flexGrow: 1, overflowY: "auto" }}
            >
              {/* Nội dung chat sẽ được hiển thị ở đây */}
            </div>
            {/* Input Bottom */}
            <div
              className="chat-bottom ml-3 mr-3 mb-2"
              style={{ flexShrink: 0 }}
            >
              <div
                className="d-flex"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  gap: "0.5rem",
                }}
              >
                <div
                  className="d-flex p-2"
                  style={{
                    width: "100%",
                    backgroundColor: "#ffffff",
                    borderRadius: 20,
                    gap: "6px",
                  }}
                >
                  <Button sx={{ minWidth: 0 }} className="custom-button-1">
                    {<SentimentSatisfiedOutlinedIcon className="icon" />}
                  </Button>
                  <input
                    // ref={messageInputRef}
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    type="text"
                    className="input-message"
                    style={{
                      flex: "1",
                      padding: "8px",
                      width: "100%",
                      border: "none",
                    }}
                    placeholder="Type your message"
                  ></input>
                  <Button sx={{ minWidth: 0 }} className="custom-button-1">
                    {<AttachFileRoundedIcon className="icon" />}
                  </Button>
                </div>
                <Button
                  sx={{
                    minWidth: 0,
                    backgroundColor: "white",
                    padding: "14px",
                    borderRadius: 100,
                  }}
                  className="send-button"
                >
                  {message.length > 0 ? (
                    <SendRoundedIcon className="icon" />
                  ) : (
                    <KeyboardVoiceRoundedIcon className="icon" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Chat;
