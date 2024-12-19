"useClient";

import React, { useEffect, useRef, useState } from "react";
import ChatItem from "./ChatItem";
import { User } from "@/models/UserModel";
import { useSelector } from "react-redux";
import { userSelector } from "@/redux/userSlice";
import { PageRes } from "@/models/AppModel";
import { ChatMessageReq, ChatType, Message, MessageType } from "@/models/MessageModel";
import { CircularProgress } from "@mui/material";
import { GLOBAL_API } from "@/config/config";
import handleApi from "@/config/handleApi";

interface Props {
  userSelected: User;
  newMessage?: Message;
}

const ChatBody = ({ userSelected, newMessage }: Props) => {
  const user: User = useSelector(userSelector);
  const [messagePage, setMessagePage] = useState<PageRes<Message>>({
    data: [],
    currentPage: 0,
    pageSize: 0,
    totalElements: 0,
    totalPages: 0,
  });
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (newMessage && messagePage !== undefined) {
      setMessagePage((prev) => ({...prev, data: [newMessage, ...prev.data],
      }));

      sendNewMessage(newMessage);
    }
  }, [newMessage]);

  const sendNewMessage = async (message: Message) => {
    const req: ChatMessageReq = {
      content: message.content,
      receiverId: message.receiverId,
      senderId: message.senderId,
      messageType: MessageType.TEXT,
      chatType: ChatType.PERSONAL
    };
    const url = `${GLOBAL_API.MESSAGE}`;
    try {
      const res: any = await handleApi(url, req, "post");
      const mes : Message = res.result;
      setMessagePage((prev) => ({...prev, data: prev?.data.map((msg) =>msg.id === message.id ? mes : msg),
      }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (userSelected) {
      if (divRef.current) {
        divRef.current.scrollTop = 0; // Cuộn đến vị trí cụ thể
      }
      getMessages(1);
    }
    setPage(1);
  }, [userSelected]);

  const getMessages = async (pageR?: number) => {
    setIsLoading(true);
    try {
      const urlR = `${GLOBAL_API.MESSAGE}/chat?senderId=${user.id}&receiverId=${
        userSelected.id
      }&page=${pageR ?? page}`;
      const res: any = await handleApi(urlR);

      if (pageR === 1 || page === 1) {
        setMessagePage(res.result);
      } else {
        setMessagePage((prevData) => ({
          ...res.result,
          data: [...(prevData?.data || []), ...res.result.data],
        }));
      }

      console.log(res);
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (page > 1) {
      getMessages();
    }
  }, [page]);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const top =
      e.currentTarget.scrollHeight - 5 <
      -e.currentTarget.scrollTop + e.currentTarget.clientHeight;
    console.log(-e.currentTarget.scrollTop + e.currentTarget.clientHeight);

    console.log("scrollTop:", e.currentTarget.scrollTop);
    console.log("scrollHeight:", e.currentTarget.scrollHeight);
    console.log("clientHeight:", e.currentTarget.clientHeight);

    // Kiểm tra nếu cuộn đến cuối và chưa đang tải dữ liệu
    if (
      top &&
      !isLoading &&
      messagePage &&
      messagePage.data.length > 0 &&
      page < messagePage.totalPages
    ) {
      setPage((prevPage) => prevPage + 1); // Gọi API để tải thêm tin nhắn
    }
  };

  return (
    <div
      ref={divRef}
      onScroll={handleScroll}
      className="chat-content"
      style={{
        flexGrow: 1,
        overflowY: "auto",
        width: "100%",
        display: "flex",
        flexDirection: "column-reverse",
      }}
    >
      {messagePage && messagePage.data.length > 0 ? (
        <>
          {messagePage.data.map((message, index) => (
            <ChatItem
              message={message}
              key={index}
              isMyMes={user.id === message.senderId ? true : false}
            />
          ))}
        </>
      ) : (
        <>chat now</>
      )}
      {isLoading && (
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            display: "flex",
            paddingTop: "20px",
          }}
        >
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default ChatBody;
