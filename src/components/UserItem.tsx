import { User } from "@/models/UserModel";
import { Avatar } from "@mui/material";
import React from "react";

interface Props {
  onClick: (user: User) => void;
  user: User;
  isSelected: boolean;
}

const UserItem = (props: Props) => {
  const { onClick, user, isSelected } = props;
  return (
    user.profile && <div
    onClick={() => {
      onClick(user);
    }}
    className="d-flex user-item"
    style={{ width: "100%", backgroundColor: isSelected ? "lightblue" : "", borderRadius: 10, padding: '10px'}}
  >
    <Avatar sx={{ width: "60px", height: "60px" }} />
    <div className="ml-2">
      <h6>{user.profile.firstName + " "+ user.profile.lastName + " (" + user.username + ")"}</h6>
    </div>
  </div>
  );
};

export default UserItem;
