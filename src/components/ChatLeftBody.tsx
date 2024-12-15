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
      <Box
        role="tabpanel"
        hidden={isSearch} // Ẩn nếu đang ở chế độ tìm kiếm
        sx={{ width: "100%", height: "100%", overflowY: 'auto'}}
      >
        <ChatLeftUsers />
      </Box>
      <Box
        role="tabpanel"
        hidden={!isSearch} // Ẩn nếu không ở chế độ tìm kiếm
        sx={{ width: "100%", height: "100%" }}
      >
        <ChatLeftSearchComponent />
      </Box>
    </>
  );
};

export default ChatLeftBody;
