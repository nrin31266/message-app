"use client";
import { GLOBAL_API } from "@/config/config";
import handleApi from "@/config/handleApi";
import { Box, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

interface Props {
  keyword: string;
}

const ChatLeftSearchComponent = ({ keyword }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (keyword) {
      search();
    } else {
      console.log("empty search");
    }
  }, [keyword]);

  const search = async () => {
    try {
      setIsLoading(true);
      const resSearch: any = await handleApi(
        `${GLOBAL_API.USER}/search?keyword=${keyword}&page=${1}`
      );
      console.log(resSearch);
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
      <div>Search: {keyword}</div>
    </>
  );
};

export default ChatLeftSearchComponent;
