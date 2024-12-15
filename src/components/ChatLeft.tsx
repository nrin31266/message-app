"use client";

import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import SearchIcon from "@mui/icons-material/Search";
import { Button, InputBase, Menu, Box } from "@mui/material";
import ChatLeftBody from "./ChatLeftBody";

const iconStyle = { fontSize: "2rem" };

const ChatLeft = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [displayKey, setDisplayKey] = useState<"main" | "sitting">("main");
  const [isSearch, setIsSearch] = useState(false);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ height: "100%", position: "relative",  overflow: 'hidden', }}>
      {/* Main Content */}
      <Box
        sx={{
          display: displayKey === "main" ? "block" : "none",
          height: "100%",
        }}
      >
        <Box sx={{ display: "flex", p: 1}}>
          <Button
            onClick={!isSearch ? handleOpenMenu : () => setIsSearch(false)}
            sx={{ minWidth: 0 }}
          >
            {!isSearch ? (
              <MenuRoundedIcon sx={iconStyle} />
            ) : (
              <ArrowBackRoundedIcon sx={iconStyle} />
            )}
          </Button>
          <Box
            sx={{
              display: "flex",
              backgroundColor: "#E8E8E8",
              borderRadius: 2,
              width: "100%",
            }}
          >
            <Button disabled sx={{ minWidth: 0 }}>
              <SearchIcon />
            </Button>
            <InputBase
              onFocus={() => setIsSearch(true)}
              sx={{ width: "100%" }}
              placeholder="Search"
            />
          </Box>
        </Box>
        <ChatLeftBody isSearch={isSearch} />
        <Menu
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        />
      </Box>

      {/* Sitting Content */}
      <Box
        sx={{
          display: displayKey === "sitting" ? "block" : "none",
          height: "100%",
        }}
      >
        <Box>hihi</Box>
      </Box>
    </Box>
  );
};

export default ChatLeft;
