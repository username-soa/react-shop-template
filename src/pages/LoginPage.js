import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import LoginForm from "../components/FormeComponents/LoginForm";
import SigninForm from "../components/FormeComponents/SigninForm";

const LoginPage = () => {
  //test
  const history = useHistory();
  const [show, setShow] = useState(true);
  const [errors, setErrors] = useState(false);

  const signup = async (d, newPhone) => {
    //test only, push user to home page
  };

  const login = (d) => {
    //test only, push user to home page
  };

  return (
    <Container
      exit={{
        opacity: 0,
        transition: { ease: "easeInOut" },
      }}
    >
      {show ? (
        <LoginForm setState={setShow} state={show} handleLogin={login} />
      ) : (
        <SigninForm
          setState={setShow}
          state={show}
          handleSignup={signup}
          errors={errors}
        />
      )}
    </Container>
  );
};

export default LoginPage;

const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #f8f8f8;
`;
