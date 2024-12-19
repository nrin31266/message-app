"useClient";

import React, { useEffect, useState } from "react";
import ChatItem from "./ChatItem";
import { User } from "@/models/UserModel";
import { useSelector } from "react-redux";
import { userSelector } from "@/redux/userSlice";
import { PageRes } from "@/models/AppModel";
import { Message } from "@/models/MessageModel";
import Page from "./../app/page";
import { CircularProgress } from "@mui/material";
import { GLOBAL_API } from "@/config/config";
import handleApi from "@/config/handleApi";

interface Props {
  userSelected: User;
  newMessage?: Message
}

const ChatBody = ({ userSelected, newMessage }: Props) => {
  const user: User = useSelector(userSelector);
  const [messagePage, setMessagePage] = useState<PageRes<Message>>();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if(newMessage && messagePage !== undefined){
      setMessagePage((prev) => ({
        data: [newMessage, ...prev?.data || []],
        currentPage: prev?.currentPage ?? 1, // Giữ nguyên currentPage nếu có hoặc mặc định 1
        totalPages: prev?.totalPages ?? 1, // Giữ nguyên totalPages nếu có hoặc mặc định 1
        pageSize: prev?.pageSize ?? 10, // Giữ nguyên pageSize nếu có hoặc mặc định 10
        totalElements: prev?.totalElements ?? (prev?.data.length ?? 0) + 1, // Cập nhật tổng số tin nhắn
      }));
    }
  }, [newMessage]);
  

  useEffect(() => {
    if (userSelected && page === 1) {
      getMessages(1);
    }
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
    }
  }, [page]);

  // Hàm để kiểm tra khi người dùng cuộn đến cuối
  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const bottom =
      e.currentTarget.scrollHeight ===
      e.currentTarget.scrollTop + e.currentTarget.clientHeight;
    if (bottom && !isLoading && messagePage && messagePage.data.length > 0) {
      setPage((prevPage) => prevPage + 1); // Tăng số trang lên và gọi lại API
    }
  };

  return (
    <div
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
      {isLoading && (
        <div>
          <CircularProgress />
        </div>
      )}
      {messagePage && messagePage.data.length > 0 ? (
        <>
          {messagePage.data.map((message, index) => (
            <ChatItem
              chat={message}
              key={index}
              isMyMes={user.id === message.senderId ? true : false}
            />
          ))}
        </>
      ) : (
        <>chat now</>
      )}
    </div>
  );
};

export default ChatBody;
