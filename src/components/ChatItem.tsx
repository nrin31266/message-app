"use client";

import { Message, Status } from "@/models/MessageModel";
import { formatDate } from "@/utils/time";
import { Avatar, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";

// Interface cho props
interface Props {
  message: Message;
  isMyMes: boolean;
}

const ChatItem = ({ message, isMyMes }: Props) => {

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
          alt={message.senderId}
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
        <p style={{ margin: "5px 0" }}>{message.content}</p>
        <div style={{ justifyContent: "end", display: "flex" }}>
          <small style={{ fontSize: "0.75rem", color: "#888" }}>
            {formatDate(message.createdAt)}
          </small>
          {message.messageStatus.status === Status.SENDING && (
            <CircularProgress
              sx={{ height: "1rem !important", width: "1rem !important" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
