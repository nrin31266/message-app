import { Avatar } from "@mui/material";
import React from "react";

// Interface cho props
interface Props {
  chat: any;
  // isLastMessage: boolean; // Kiểm tra nếu là tin nhắn cuối
  isDifferentSender: boolean; // Kiểm tra nếu là người gửi khác
}

const ChatItem = ({ chat, isDifferentSender }: Props) => {

  return (
    <div
      className="chat-item"
      style={{
        display: "flex",
        justifyContent: chat.senderId === "user1" ? "flex-end" : "flex-start", // Căn chỉnh tin nhắn người gửi bên phải
        marginBottom: "10px",
      }}
    >
      {/* Hiển thị avatar cho tin nhắn đầu tiên của người gửi trong nhóm */}
      {isDifferentSender && (
        <Avatar
          sx={{
            width: 40,
            height: 40,
            marginRight: "10px",
            backgroundColor: "#3f51b5",
          }}
        >
          {chat.senderName[0]}
        </Avatar>
      )}

      <div
        style={{
          backgroundColor: "#f1f1f1",
          padding: "10px",
          borderRadius: "10px",
          position: "relative",
        }}
      >
        <strong>{chat.senderName}</strong>
        <p>{chat.text}</p>
      </div>
    </div>
  );
};

export default ChatItem;
