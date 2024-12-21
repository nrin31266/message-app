"use client";

import { User } from "@/models/UserModel";
import EditIcon from "@mui/icons-material/Edit";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import { Button, ListItemIcon, Menu, MenuItem } from "@mui/material";
import React from "react";
import ChatLeftSearchComponent from "./ChatLeftSearchComponent";
import ChatLeftUsers from "./ChatLeftUsers";
const actions = [{ icon: <GroupAddOutlinedIcon />, name: "Add new group" }];

interface Props {
  isSearch: boolean;
  keyword: string;
  onClickUser: (user: User) => void;
  onClickNewGroup: () => void;
}

const ChatLeftBody = ({
  isSearch,
  keyword,
  onClickUser,
  onClickNewGroup,
}: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div
        role="tabpanel"
        hidden={isSearch}
        className="list-users"
        style={{ position: "relative" }}
      >
        <ChatLeftUsers />

        <Button
          sx={{
            position: "absolute",
            bottom: "1rem",
            right: "1rem",
            minWidth: "0",
            borderRadius: "50%",
            padding: "1rem",
          }}
          variant="contained"
          id="composition-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <EditIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              onClickNewGroup();
            }}
          >
            <ListItemIcon>
              <GroupAddOutlinedIcon />
            </ListItemIcon>
            New group
          </MenuItem>
        </Menu>
        <div></div>
      </div>
      {isSearch && (
        <ChatLeftSearchComponent
          onClickUser={(v) => onClickUser(v)}
          keyword={keyword}
        />
      )}
    </>
  );
};

export default ChatLeftBody;
