"use client";

import React, { useRef, useState } from "react";

import { Message, MessageType, Status } from "@/models/MessageModel";
import { MyInfo, User } from "@/models/UserModel";
import { userSelector } from "@/redux/userSlice";
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";
import KeyboardVoiceRoundedIcon from "@mui/icons-material/KeyboardVoiceRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { Instant } from '@js-joda/core';






interface Props {
  user: User;
  onSendChat: (message: Message)=>void;
}

const ChatBottom = ({ user, onSendChat }: Props) => {
  const [message, setMessage] = useState("");
  const messageInputRef = useRef<HTMLTextAreaElement>(null);
  const myInfo: MyInfo = useSelector(userSelector);
  // Hàm dùng chung cho cả Enter và Send Button
  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Message sent:", message);
      try {
        const item: Message = {
            content: message,
            senderId: myInfo.id,
            receiverId: user.id,
            messageType: MessageType.PERSONAL,
            createdAt: (Instant.now()).toString(),
            messageStatus: {
                status: Status.SENDING,
                updatedAt: (Instant.now()).toString(),
                id: -1
            },
            id: -1
        }
        onSendChat(item);
      } catch (error) {

      } finally {

      }
      setMessage(""); // Reset lại message sau khi gửi
      // Reset lại chiều cao của textarea
      if (messageInputRef.current) {
        messageInputRef.current.style.height = "auto"; // Đặt lại chiều cao ban đầu
        messageInputRef.current.focus();
      }
    }
  };

  return (
    <div className="chat-bottom mb-2 mt-2" style={{ flexShrink: 0 }}>
      <div
        className="d-flex"
        style={{
          gap: "0.5rem",
          justifyContent: "center",
          // maxHeight: '20rem',
          // height: '100%'
          // position: "sticky",
          // bottom: 0,
        }}
      >
        <div
          className="d-flex p-2 sender-content"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: 20,
            gap: "6px",
          }}
        >
          <div className="d-flex" style={{ alignItems: "end" }}>
            <Button
              sx={{ minWidth: 0, alignItems: "end" }}
              className="custom-button-1"
            >
              {<SentimentSatisfiedOutlinedIcon className="icon" />}
            </Button>
          </div>
          <textarea
            ref={messageInputRef}
            rows={1}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="input-message"
            placeholder="Type your message"
            style={{
              padding: "8px",
              border: "none",
              height: "auto",
              resize: "none",
              overflowY: "auto", // Hiển thị thanh cuộn khi vượt quá maxHeight
              boxSizing: "border-box", // Đảm bảo padding không phá layout
            }}
            onInput={(e: React.FormEvent<HTMLTextAreaElement>) => {
              const target = e.currentTarget; // Đảm bảo TypeScript hiểu đúng kiểu của target
              target.style.height = "auto"; // Reset chiều cao về auto trước
              target.style.height = `${Math.min(target.scrollHeight, 150)}px`; // Giới hạn chiều cao tối đa
            }}
            onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
              if (e.key === "Enter") {
                e.preventDefault(); // Ngăn chặn hành động mặc định (thêm dòng mới)
                handleSendMessage(); // Gọi hàm gửi tin nhắn
              }
            }}
          />

          <div className="d-flex" style={{ alignItems: "end" }}>
            <Button sx={{ minWidth: 0 }} className="custom-button-1">
              {<AttachFileRoundedIcon className="icon" />}
            </Button>
          </div>
        </div>
        <div className="d-flex" style={{ alignItems: "end" }}>
          <Button
            sx={{
              minWidth: 0,
              backgroundColor: "white",
              padding: "14px",
              borderRadius: 100,
            }}
            className="send-button"
            onClick={() => {
              if (message) {
                handleSendMessage();
              }
            }}
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
  );
};

export default ChatBottom;
