"use client";

import React, { useEffect, useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import SearchIcon from "@mui/icons-material/Search";
import { Button, InputBase, Menu, Box, MenuItem } from "@mui/material";
import ChatLeftBody from "./ChatLeftBody";
import SittingComponent from "./SittingComponent";

const iconStyle = { fontSize: "2rem" };

const ChatLeft = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [displayKey, setDisplayKey] = useState<"main" | "sitting">("main");
  const [isSearch, setIsSearch] = useState(false);
  const [query, setQuery] = useState('');
  const [keyword, setKeyword] = useState("");


  // Sử dụng useRef để lưu trữ giá trị của debounceTimer
  const debounceTimer = React.useRef<NodeJS.Timeout | null>(null);
  // Effect để xử lý debouncing
  useEffect(() => {
    if (query) {
      // Thiết lập debounce timer
      debounceTimer.current = setTimeout(() => {
        console.log('Searching for:', query);
        setKeyword(query);
      }, 600); // Thời gian chờ sau khi dừng gõ
    }
    return () => {
      // Hủy bỏ timer khi người dùng tiếp tục nhập
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [query]); // Chạy lại khi `query` thay đổi

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
          height: "100%",
        }}
      >
        {/* Header Section */}
        <div
          className="p-1"
          style={{ display: "flex", height: "8%", alignItems: "center" }}
        >
          <Button
            onClick={!isSearch ? handleOpenMenu : () => setIsSearch(false)}
            sx={{ minWidth: 0, height: "max-content" }}
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
              height: "40px",
            }}
          >
            <Button disabled sx={{ minWidth: 0 }}>
              <SearchIcon />
            </Button>
            <InputBase
              onFocus={() => setIsSearch(true)}
              sx={{ width: "100%" }}
              placeholder="Search"
              onChange={(e) => setQuery(e.target.value)} 
              size="medium"
            />
          </Box>
        </div>

        <Box sx={{ height: "92%" }}>
          <ChatLeftBody keyword={keyword} isSearch={isSearch} />
        </Box>

        {/* Menu */}
        <Menu
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem onClick={()=>{setDisplayKey("sitting");}}>Sitting</MenuItem>
        </Menu>
      </Box>

      {/* Sitting Content */}
      <Box
        sx={{
          display: displayKey === "sitting" ? "block" : "none",
          height: "100%",
        }}
      >
        <SittingComponent onClose={()=>setDisplayKey("main")}/>
      </Box>
    </>
  );
};

export default ChatLeft;
