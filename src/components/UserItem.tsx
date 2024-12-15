import { Avatar } from "@mui/material";
import React from "react";

const UserItem = () => {
  return (
    <div
      className="d-flex user-item"
      style={{  width: "100%" }}
    >
      <Avatar sx={{ width: "60px", height: "60px" }} />
      <div>
        <h5>Name user</h5>
      </div>
    </div>
  );
};

export default UserItem;
