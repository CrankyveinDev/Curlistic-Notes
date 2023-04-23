import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Button,
  Input,
  Container,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../actions/auth";

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  // const handleSubmit =async (event) => {
  //   event.preventDefault();
  //   const response =await fetch("http://localhost:5000/user/login", {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       email: user.email,
  //       password: user.password,
  //     })
  //   });
  //   // console.log(response.json());
  //   // console.log(response);
  //   const returnResponse = await response.json();
  //   // console.log(returnResponse);
  //   if(response.status===404){
  //     alert(returnResponse.errors[0].msg);
  //   }else if(response.status!==200){
  //     alert(returnResponse.error);
  //     // console.log(returnResponse);
  //   }else{
  //     navigate("/");
  //   }

  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    login({ ...user }).then((data) => {
      // console.log(data);
      if (!data?.response) {
        navigate("/todo");
      } else {
        // console.log(data.response.status);
        if (data.response.status === 404) {
          alert(data.response.data.errors[0].msg);
        } else if (data.response.status !== 200) {
          alert(data.response.data.error);
          // console.log(data.response);
        }
      }
    });
  };

  return (
    <Container maxW="50%">
      <form onSubmit={handleSubmit}>
        <FormControl isRequired my="10px">
          <FormLabel>Email:</FormLabel>
          <Input
            name="email"
            type="email"
            placeholder="Enter the Email"
            onChange={handleChange}
            value={user.email}
          />
        </FormControl>
        <FormControl isRequired my="10px">
          <FormLabel>PassWord:</FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="Enter the Password"
            onChange={handleChange}
            value={user.password}
          />
        </FormControl>

        <Button type="submit" my="20px" onSubmit={handleSubmit}>
          Submit
        </Button>
        <Link to="/auth/signup">
          <Button ml="1em">New user Sign Up</Button>
        </Link>
      </form>
    </Container>
  );
}
