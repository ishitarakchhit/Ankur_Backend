import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import axios from "axios";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [students, setStudents] = useState([]);

  const handleSearch = async () => {
    try {
      const loggedInEducatorId = JSON.parse(
        localStorage.getItem("userInfo")
        )._id;
        console.log("loggedInEducatorId:", loggedInEducatorId);
        console.log("searchTerm:", searchTerm);
      const response = await axios.get(
        `http://localhost:7070/api/user/searchst?searchTerm=${searchTerm}&educatorId=${loggedInEducatorId}`
      );
      setStudents(response.data);
    } catch (error) {
      console.error("Error searching for students:", error);
    }
  };

  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder="Select Student"
        className="mr-sm-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="outline-primary" onClick={handleSearch}>
        Search
      </Button>
      {students.length > 0 && (
        <ul>
          {students.map((student) => (
            <li key={student._id}>{student.name}</li>
          ))}
        </ul>
      )}
    </Form>
  );
};

export default SearchBar;
