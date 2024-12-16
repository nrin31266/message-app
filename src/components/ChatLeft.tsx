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
    <>
      {/* Main Content */}
      <Box
        sx={{
          display: displayKey === "main" ? "block" : "none",
          height: '100%'
        }}
      >
        {/* Header Section */}
        <div className="p-1" style={{ display: "flex", height: '8%', alignItems: 'center' }}>
          <Button
            onClick={!isSearch ? handleOpenMenu : () => setIsSearch(false)}
            sx={{ minWidth: 0,height: 'max-content' }}
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
              height: '40px'
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
        </div>

        <Box sx={{height: '92%',}}>
          <ChatLeftBody isSearch={isSearch} />
        </Box>
        
        {/* Menu */}
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
    </>
  );
};

export default ChatLeft;
