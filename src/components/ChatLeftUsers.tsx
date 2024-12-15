import React, { useState } from 'react'
import UserItem from './UserItem';

const ChatLeftUsers = () => {

    const [users, setUsers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

    const renderUserItems= ()=>{
        return users.map((item, index)=><UserItem key={index}/>)
    }


  return (
    <div className='list-user'>
        {renderUserItems()}
    </div>
  )
}

export default ChatLeftUsers