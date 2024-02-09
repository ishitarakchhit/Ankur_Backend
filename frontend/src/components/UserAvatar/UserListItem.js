import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";
import { IoIosStar } from "react-icons/io";

const UserListItem = ({ user, handleFunction }) => {
  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      bg="#E8E8E8"
      _hover={{
        background: "#38B2AC",
        color: "white",
      }}
      w="100%"
      display="flex"
      alignItems="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
    >
      <Avatar
        mr={2}
        size="sm"
        cursor="pointer"
        name={user.samename}
        src={user.pic}
      />
      <Box>
        <Text style={{ fontSize: "20px" }}>{user.name}</Text>
        <Text fontSize="s">
          <b style={{ marginTop: "20px" }}>
            <i>Email : </i>{" "}
          </b>
          {user.email}
          <br />
          <b>
            <i>Work Description: </i>{" "}
          </b>

          {user.therapistDetails.work_desc}
          <br />
          <span className="star" style={{ display: "flex" }}>
            <IoIosStar style={{ color: "grey" }} />{" "}
            <IoIosStar style={{ color: "grey" }} />{" "}
            <IoIosStar style={{ color: "grey" }} />{" "}
            <IoIosStar style={{ color: "grey" }} />
            <IoIosStar style={{ color: "grey" }} />
          </span>
          <b>
            {" "}
            <i>Years of Experience :</i>{" "}
          </b>
          {user.therapistDetails.experience_year}
          <br />
        </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;
