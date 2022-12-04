import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomInput from "../elements/CustomInput";
import Button from "../elements/Button";

const LoginForm = ({ handleLogin, errors }) => {
  const parentAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };
  const childAnimations = {
    hidden: { opacity: 0, y: "50px" },
    show: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <Container animate="show" initial="hidden" variants={parentAnimations}>
      <Formik
        enableReinitialize={true}
        initialValues={{
          email: "",
          pwd: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string().email("must be an e-mail").required("required"),
          pwd: Yup.string().required("required"),
        })}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          handleLogin(data);
          setSubmitting(false);
        }}
      >
        {({ handleSubmit, isSubmitting, values }) => (
          <Form className="form first-form">
            <motion.h2 className="form-h2" variants={childAnimations}>
              Log in
            </motion.h2>
            <CustomInput
              placeholder="Email"
              name="email"
              id="email"
              margin="0.5em"
              bg="transparent"
              animations={childAnimations}
            />
            <CustomInput
              placeholder="Password"
              name="pwd"
              id="pwd"
              margin="0.5em"
              type="password"
              bg="transparent"
              animations={childAnimations}
            />
            <AnimatePresence>
              {errors && (
                <motion.p
                  exit="exit"
                  animate="show"
                  initial="hidden"
                  variants={childAnimations}
                  className="errors-red"
                >
                  {errors}
                </motion.p>
              )}
            </AnimatePresence>
            <motion.div className="btn-wrp-login" variants={childAnimations}>
              <Button
                radius="12px"
                type="submit"
                color="#fff"
                bg="#393d46"
                border="#393d46"
                hover="#f8f8f8"
                title={isSubmitting ? "Logging..." : "Let's go"}
                handleClick={handleSubmit}
              />
            </motion.div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginForm;

const Container = styled(motion.div)`
  width: 600px;
  min-width: 300px;
  border-radius: 10px;
  padding: 2em 1em;
  form {
    width: 100% !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  input {
    width: 100% !important;
    margin: 0.5em 0;
  }
  .form-h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #393d46;
    margin-bottom: 2em;
  }

  .btn-wrp-login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .errors-red {
    color: red;
    font-size: 0.9rem;
    margin: 0.5em 0 0 0;
  }
`;
