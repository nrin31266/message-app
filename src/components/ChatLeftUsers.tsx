import React, { useState } from 'react';
import UserItem from './UserItem';
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';

import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

const ChatLeftUsers = () => {
  // Mảng người dùng giả định
  // const [users, setUsers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

  // Trạng thái lưu người dùng đã chọn
  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  const handleUserClick = (userId: number) => {
    
    setSelectedUser(userId);
  };

  const renderUserItems = () => {
    // return users.map((userId, index) => (
    //   <UserItem
    //     key={index}
    //     user={userId}
    //     isSelected={selectedUser === userId} // Kiểm tra xem người dùng có được chọn không
    //     onClick={() => handleUserClick(userId)} // Thực hiện chọn người dùng
    //   />
    // ));
    return <>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {/* {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))} */}
      </SpeedDial>
      
    </>
  };

  return <>{renderUserItems()}</>;
};

export default ChatLeftUsers;
