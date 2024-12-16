import React from "react";
import { Box } from "@mui/material";
import ChatLeftUsers from "./ChatLeftUsers";
import ChatLeftSearchComponent from "./ChatLeftSearchComponent";

interface Props {
  isSearch: boolean;
}

const ChatLeftBody = ({ isSearch }: Props) => {
  return (
    <>
      <div
        role="tabpanel"
        hidden={isSearch} 
        className="list-users"
      >
        <ChatLeftUsers />
      </div>
      <Box
        role="tabpanel"
        hidden={!isSearch}
        sx={{ width: "100%", height: "100%", }}
      >
        <ChatLeftSearchComponent />
      </Box>
    </>
  );
};

export default ChatLeftBody;
