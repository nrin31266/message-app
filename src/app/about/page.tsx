"use client"

import { Avatar, Divider } from '@mui/material';
import React, { useState } from 'react'

interface Message {
  id: string;
  text: string;
  senderId: string;
  senderName: string;
  created: number; // Timestamp
}


const About = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello",
      senderId: "user1",
      senderName: "User 1",
      created: 1627286200000,
    },
    {
      id: "2",
      text: "How are you?",
      senderId: "user1",
      senderName: "User 1",
      created: 1627286250000,
    },
    {
      id: "3",
      text: "I'm fine, thanks!",
      senderId: "user2",
      senderName: "User 2",
      created: 1627286300000,
    },
    {
      id: "4",
      text: "Great to hear!",
      senderId: "user2",
      senderName: "User 2",
      created: 1627286400000, // Same sender but different time, might require avatar
    },
    {
      id: "5",
      text: "Long time no see!",
      senderId: "user1",
      senderName: "User 1",
      created: 1627286700000, // A long gap
    },
    {
      id: "6",
      text: "How have you been?",
      senderId: "user2",
      senderName: "User 2",
      created: 1627286800000,
    },
    {
      id: "7",
      text: "Good, thanks for asking!",
      senderId: "user1",
      senderName: "User 1",
      created: 1627372800000, // New day
    },
    {
      id: "8",
      text: "What about you?",
      senderId: "user2",
      senderName: "User 2",
      created: 1627372900000,
    },
  ]);

  const avatarGap = 300000; // 5 minutes in milliseconds (300,000 ms = 5 minutes)

  // Hàm để định dạng ngày từ timestamp
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  // Nhóm các tin nhắn theo ngày
  const groupedMessages = messages.reduce((acc, message) => {
    const date = formatDate(message.created);
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(message);
    return acc;
  }, {} as { [key: string]: Message[] });

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <div style={{ maxHeight: "500px", overflowY: "auto" }}>
        {Object.keys(groupedMessages).map((date, dateIndex) => (
          <div key={date}>
            {/* Tiêu đề ngày */}
            <div
              style={{
                textAlign: "center",
                fontWeight: "bold",
                margin: "10px 0",
                color: "#555",
                fontSize: "14px",
              }}
            >
              {date}
            </div>

            {groupedMessages[date].map((message, index) => {
              const timeDifference =
                index > 0 ? message.created - groupedMessages[date][index - 1].created : 0;

              const showAvatar =
                index === 0 || // Always show avatar for the first message
                groupedMessages[date][index - 1].senderId !== message.senderId || // Show avatar if sender changes
                timeDifference > avatarGap; // Show avatar if time difference is larger than 5 minutes

              return (
                <div key={message.id} style={{ display: "flex", marginBottom: "10px" }}>
                  {showAvatar && (
                    <Avatar sx={{ width: 40, height: 40, marginRight: "10px" }}>
                      {message.senderName[0]}
                    </Avatar>
                  )}
                  <div style={{ backgroundColor: "#f1f1f1", padding: "10px", borderRadius: "10px" }}>
                    <strong>{message.senderName}</strong>
                    <p>{message.text}</p>
                  </div>
                </div>
              );
            })}
            {dateIndex < Object.keys(groupedMessages).length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About