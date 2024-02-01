import React from "react";

import { ChatState } from "../context/ChatProvider";
import { Box } from "@chakra-ui/react";

import MyChats from "../components/misc/MyChats";
import ChatBox from "../components/misc/ChatBox";
import ListenSideDraw from "../components/misc/ListenSideDraw";

const ListenerChat = () => {
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <ListenSideDraw />}

      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default ListenerChat;
