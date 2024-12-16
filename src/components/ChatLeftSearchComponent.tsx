"use client";
import { GLOBAL_API } from "@/config/config";
import handleApi from "@/config/handleApi";
import { PageRes } from "@/models/AppModel";
import { User } from "@/models/UserModel";
import { Box, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserItem from "./UserItem";

interface Props {
  keyword: string;
}

const ChatLeftSearchComponent = ({ keyword }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [globalDataSearch, setGlobalDataSearch] = useState<PageRes<User>>();

  useEffect(() => {
    if (keyword) {
      search();
    } else {
      console.log("empty search");
      setGlobalDataSearch(undefined);
    }
  }, [keyword]);

  const search = async () => {
    try {
      setIsLoading(true);
      const resSearch: any = await handleApi(
        `${GLOBAL_API.USER}/search?keyword=${keyword}&page=${1}`
      );
      console.log(resSearch);
      setGlobalDataSearch(resSearch.result);
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
      {
        !globalDataSearch ? <> <h4>Connect with friends</h4></> :
        globalDataSearch.data.length === 0?<> <h4>Empty</h4></> :
        <>
          <div style={{height: '100%', overflowY: 'auto', width: '100%'}}>

            {
              globalDataSearch.data.map((user, index)=><UserItem key={user.id} isSelected={false} onClick={()=>{}} user={user}/>)
            }
          </div>
        </>
      }
    </>
  );
};

export default ChatLeftSearchComponent;
