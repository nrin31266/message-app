import { Avatar } from "@mui/material";
import React from "react";

interface Props {
  onClick: (user: any) => void;
  user: any;
  isSelected: boolean;
}

const UserItem = (props: Props) => {
  const { onClick, user, isSelected } = props;
  return (
    <div
      onClick={() => {
        onClick(user);
      }}
      className="d-flex user-item"
      style={{ width: "100%", backgroundColor: isSelected ? "lightblue" : "", borderRadius: 10, padding: '10px'}}
    >
      <Avatar sx={{ width: "60px", height: "60px" }} />
      <div>
        <h5>Name user</h5>
      </div>
    </div>
  );
};

export default UserItem;
