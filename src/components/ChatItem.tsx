import { Avatar } from "@mui/material";
import React from "react";

// Interface cho props
interface Props {
  chat: any
  isMyMes: boolean;
}

const ChatItem = ({ chat, isMyMes }: Props) => {
  return (
    <div
      className="chat-item"
      style={{
        display: "flex",
        alignSelf: isMyMes ? "flex-end" : "flex-start", // Dùng flex-end và flex-start chuẩn hơn
        marginBottom: "10px",
        maxWidth: "75%", // Đảm bảo tin nhắn không chiếm hết chiều ngang
        wordWrap: "break-word",
        whiteSpace: "normal", // Đảm bảo tin nhắn sẽ ngắt dòng nếu cần
        overflowWrap: "break-word", // Đảm bảo ngắt dòng nếu cần
        wordBreak: "break-all",
        width: "fit-content",
      }}
    >
      {/* Avatar hiển thị chỉ khi không phải tin nhắn của mình */}
      {!isMyMes && (
        <Avatar
          sx={{ width: 44, height: 44, marginRight: "10px" }}
          alt={chat.senderName}
        />
      )}

      <div
        style={{
          backgroundColor: isMyMes ? "#d1ffd6" : "#f1f1f1", // Đổi màu nền dựa trên tin nhắn
          padding: "10px",
          borderRadius: "10px",
          position: "relative",
          width: "fit-content",
        }}
      >
        <p style={{ margin: "5px 0" }}>{chat.text + 'dasssssssssssss sssssssst errrrrrrrrrrrrr rrrrrrrrrrrrrrrrrrr rrrweffffff fffffffffffffffff fffffffffffffff'}</p>
        <small style={{ fontSize: "0.75rem", color: "#888" }}>{chat.created}</small>
      </div>
    </div>
  );
};

export default ChatItem;
