import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";
import LoginForm from "../components/FormeComponents/LoginForm";
import SigningForm from "../components/FormeComponents/SigningForm";
import Footer from "../components/FixedElements/Footer";

const LoginPage = () => {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: "100px",
    },
    show: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: "-100px",
    },
  };
  const history = useHistory();
  const [show, setShow] = useState(true);
  const [errors, setErrors] = useState(false);

  const signup = async (d, newPhone) => {
    //test only, push user to home page
    history.push("/account");
  };

  const login = (d) => {
    //test only, push user to home page
    history.push("/account");
  };

  return (
    <Container
      exit={{
        opacity: 0,
        transition: { ease: "easeInOut" },
      }}
    >
      <div className="login-header">
        <div className="login-header-container">
          <Link to={"/"}>
            <motion.h2
              className="login-header-h2"
              animate="show"
              exit="exit"
              initial="hidden"
              variants={fadeUp}
            >
              DIGITAL ERA.
            </motion.h2>
          </Link>
          {show === true ? (
            <motion.p
              animate="show"
              exit="exit"
              initial="hidden"
              variants={fadeUp}
              className="login-header-link"
              onClick={() => {
                setShow(!show);
              }}
            >
              Create an Account
            </motion.p>
          ) : (
            <motion.p
              animate="show"
              exit="exit"
              initial="hidden"
              variants={fadeUp}
              className="login-header-link"
              onClick={() => {
                setShow(!show);
              }}
            >
              Log in
            </motion.p>
          )}
        </div>
      </div>
      <div className="forms-container">
        {show ? (
          <LoginForm setState={setShow} state={show} handleLogin={login} />
        ) : (
          <SigningForm
            setState={setShow}
            state={show}
            handleSignup={signup}
            errors={errors}
          />
        )}
      </div>
      <Footer />
    </Container>
  );
};

export default LoginPage;

const Container = styled(motion.div)`
  background: #f8f8f8;
  .forms-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
  }
  .login-header {
    width: 100%;
    height: 100px;
  }
  .login-header-container {
    margin: 0 150px;
    padding: 3em 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .login-header-h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #393d46;
  }
  .login-header-link {
    font-weight: 500;
    color: #393d46;
    cursor: pointer;
  }

  @media only screen and (max-width: 1200px) {
    .login-header-container {
      margin: 0 2em;
    }
  }
  @media only screen and (max-width: 768px) {
    .login-header-h2 {
      font-size: 1.25rem;
    }
    .login-header-container {
      margin: 0 1em;
    }
    .login-header-link {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 400px) {
    .login-header-h2 {
      font-size: 1.1rem;
    }

    .login-header-link {
      font-size: 10px;
    }
  }
`;
