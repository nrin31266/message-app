import React, { useState } from "react";
import ChatItem from "./ChatItem";
import { User } from "@/models/UserModel";
import { useSelector } from "react-redux";
import { userSelector } from "@/redux/userSlice";

// Interface cho dữ liệu giả
interface FakeChat {
  id: string;
  text: string;
  senderId: string;
  senderName: string;
  created: number; // timestamp
}

const ChatBody = () => {
  const user: User = useSelector(userSelector);
  // Dữ liệu giả
  const [chats, setChats] = useState<FakeChat[]>([
    // Ngày hiện tại
    {
      id: "1",
      text: "Hello, how are you?",
      senderId: "fde199f3-d8f0-470a-a972-65b319966386",
      senderName: "User",
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
      senderId: "fde199f3-d8f0-470a-a972-65b319966386",
      senderName: "User",
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



  return (
    <>
      {chats.map((chat, index)=><ChatItem
        chat={chat} key={chat.id} isMyMes={user.id === chat.senderId? true : false}
      />)}
      
    </>
  );
};

export default ChatBody;
