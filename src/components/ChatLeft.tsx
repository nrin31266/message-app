"use client";

import React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Button, InputBase, Menu } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const ChatLeft = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="d-flex">
        <Button onClick={handleOpenMenu} style={{ minWidth: "0" }}>
          <MenuRoundedIcon sx={{ fontSize: "2rem" }} />
        </Button>
        <div className="d-flex" style={{backgroundColor: '#E8E8E8', borderRadius: 10, width: '100%'}}>
        <Button disabled style={{ minWidth: "0" }}><SearchIcon/></Button>
        <InputBase
          onFocus={()=>{console.log('fc ip se')}}
          sx={{width: '100%'}}
          placeholder="Search"
        >
        </InputBase>
        </div>
      </div>
      <Menu
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        
      </Menu>
    </>
  );
};

export default ChatLeft;
