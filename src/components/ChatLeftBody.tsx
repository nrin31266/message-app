"use client"

import React, { useEffect } from "react";
import { Box } from "@mui/material";
import ChatLeftUsers from "./ChatLeftUsers";
import ChatLeftSearchComponent from "./ChatLeftSearchComponent";

interface Props {
  isSearch: boolean;
  keyword: string;
}

const ChatLeftBody = ({ isSearch, keyword }: Props) => {
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
        isSearch && <ChatLeftSearchComponent keyword={keyword} />
      }
      
    </>
  );
};

export default ChatLeftBody;
