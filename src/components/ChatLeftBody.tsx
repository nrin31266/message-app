"use client"

import React, { useEffect } from "react";
import { Box } from "@mui/material";
import ChatLeftUsers from "./ChatLeftUsers";
import ChatLeftSearchComponent from "./ChatLeftSearchComponent";
import { User } from "@/models/UserModel";

interface Props {
  isSearch: boolean;
  keyword: string;
  onClickUser: (user:User)=>void
}

const ChatLeftBody = ({ isSearch, keyword, onClickUser }: Props) => {
  return (
    <>
      <div
        role="tabpanel"
        hidden={isSearch} 
        className="list-users"
      >
        <ChatLeftUsers />
      </div>
      {
        isSearch && <ChatLeftSearchComponent onClickUser={(v)=>onClickUser(v)} keyword={keyword} />
      }
      
    </>
  );
};

export default ChatLeftBody;
