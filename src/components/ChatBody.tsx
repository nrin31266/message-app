import React, { useState } from "react";
import ChatItem from "./ChatItem";

// Interface cho dữ liệu giả
interface FakeChat {
  id: string;
  text: string;
  senderId: string;
  senderName: string;
  created: number; // timestamp
}

const ChatBody = () => {
  // Dữ liệu giả
  const [chats, setChats] = useState<FakeChat[]>([
    // Ngày hiện tại
    {
      id: "1",
      text: "Hello, how are you?",
      senderId: "user1",
      senderName: "User 1",
      created: Date.now() - 300000, // Tin nhắn cách hiện tại 5 phút
    },
    {
      id: "2",
      text: "I'm good, and you?",
      senderId: "user1",
      senderName: "User 1",
      created: Date.now() - 250000, // Tin nhắn cách hiện tại 4 phút
    },
    {
      id: "3",
      text: "I'm doing well, thanks for asking!",
      senderId: "user2",
      senderName: "User 2",
      created: Date.now() - 150000, // Tin nhắn cách hiện tại 2 phút
    },
    {
      id: "4",
      text: "Great to hear!",
      senderId: "user2",
      senderName: "User 2",
      created: Date.now() - 60000, // Tin nhắn cách hiện tại 1 phút
    },
    {
      id: "5",
      text: "Let's meet soon.",
      senderId: "user1",
      senderName: "User 1",
      created: Date.now() - 1000000, // Tin nhắn cách hiện tại 17 phút
    },

    // Ngày hôm qua (cách 1 ngày)
    {
      id: "6",
      text: "Sure, I'll check my schedule.",
      senderId: "user2",
      senderName: "User 2",
      created: Date.now() - 900000 - 86400000, // Tin nhắn cách hiện tại 1 ngày 15 phút
    },
    {
      id: "7",
      text: "What time works for you?",
      senderId: "user1",
      senderName: "User 1",
      created: Date.now() - 800000 - 86400000, // Tin nhắn cách hiện tại 1 ngày 13 phút
    },

    // Ngày hôm kia (cách 2 ngày)
    {
      id: "8",
      text: "We should catch up sometime.",
      senderId: "user2",
      senderName: "User 2",
      created: Date.now() - 900000 - 86400000 * 2, // Tin nhắn cách hiện tại 2 ngày 15 phút
    },
    {
      id: "9",
      text: "Yes, I agree.",
      senderId: "user1",
      senderName: "User 1",
      created: Date.now() - 800000 - 86400000 * 2, // Tin nhắn cách hiện tại 2 ngày 13 phút
    },
  ]);

  const groupByDate = (chats: FakeChat[]) => {
    const groupedChats: { [key: string]: FakeChat[] } = {};
    chats.forEach((chat) => {
      const date = new Date(chat.created).toLocaleDateString();
      if (!groupedChats[date]) {
        groupedChats[date] = [];
      }
      groupedChats[date].push(chat);
    });
    return groupedChats;
  };

  const groupedChats = groupByDate(chats);

  return (
    <div>
      {Object.keys(groupedChats).map((date) => (
        <div key={date}>
          <div
            style={{
              textAlign: "center",
              margin: "10px 0",
              color: "#aaa",
              fontSize: "14px",
            }}
          >
            {/* Thanh phân cách ngày */}
            {date}
          </div>
          {groupedChats[date].map((chat, index) => (
            <ChatItem
              key={chat.id}
              chat={chat}
              isLastMessage={index === groupedChats[date].length - 1}
              isDifferentSender={
                index === 0 || chat.senderId !== groupedChats[date][index - 1].senderId
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChatBody;
