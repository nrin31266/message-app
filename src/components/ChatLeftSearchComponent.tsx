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
  onClickUser: (user: User)=>void
}

const ChatLeftSearchComponent = ({ keyword, onClickUser }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [globalDataSearch, setGlobalDataSearch] = useState<PageRes<User>>();
  const [page, setPage] = useState(1); // Lưu trữ trang hiện tại

  useEffect(() => {
    if (keyword) {
      search(1);
    } else {
      console.log("empty search");
      setGlobalDataSearch(undefined);      
    }
    setPage(1);
  }, [keyword]);
  useEffect(() => {
    if (globalDataSearch && page > 1 && page <= globalDataSearch.totalPages) {
      search();
    }
  }, [page]);

  const search = async (localPage?:number) => {
    try {
      setIsLoading(true);
      const resSearch: any = await handleApi(
        `${GLOBAL_API.USER}/search?keyword=${keyword}&page=${localPage??page}`
      );
      console.log(resSearch);
      if (page === 1 || localPage === 1) {
        // Nếu là trang đầu tiên, đặt lại dữ liệu tìm kiếm
        setGlobalDataSearch(resSearch.result);
      } else {
        // Nếu không phải trang đầu tiên, ghép thêm dữ liệu vào
        setGlobalDataSearch((prevData) => ({
          ...resSearch.result,
          data: [...(prevData?.data || []), ...resSearch.result.data],
        }));
      }
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  // Hàm để kiểm tra khi người dùng cuộn đến cuối
  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const bottom =
      e.currentTarget.scrollHeight ===
      e.currentTarget.scrollTop + e.currentTarget.clientHeight;
    if (
      bottom &&
      !isLoading &&
      globalDataSearch &&
      globalDataSearch.data.length > 0
    ) {
      setPage((prevPage) => prevPage + 1); // Tăng số trang lên và gọi lại API
    }
  };

  const handleOnClickItem = (user: User)=>{
    console.log(user);
    onClickUser(user);
  }


  return (
    <>
      {isLoading && (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
      {!globalDataSearch ? (
        <>
          {" "}
          <h4>Connect with friends</h4>
        </>
      ) : globalDataSearch.data.length === 0 ? (
        <>
          {" "}
          <h4>Empty</h4>
        </>
      ) : (
        <>
          <div
          className="pl-2 pr-2"
            onScroll={handleScroll} // Đảm bảo theo dõi sự kiện cuộn
            style={{ height: "100%", overflowY: "auto", width: "100%" }}
          >
            {globalDataSearch.data.map((user, index) => (
              <UserItem
                key={user.id}
                isSelected={false}
                onClick={(v) => handleOnClickItem(v)}
                user={user}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ChatLeftSearchComponent;
