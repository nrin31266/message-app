"use client"

import { getLocal } from '@/utils/local';
import { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LOCAL_NAME } from '@/constant/globalConstant';
import { setUser } from '@/redux/userSlice';

const Routers = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  const dispatch = useDispatch();

  useEffect(()=>{
    getLocalUser();


  }, []);

  const getLocalUser= ()=>{
    const user = getLocal(LOCAL_NAME.user);
    user && dispatch(setUser(user));
  }


  return <>{children}</>;
};



export default Routers;
