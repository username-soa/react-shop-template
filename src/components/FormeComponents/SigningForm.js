import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomInput from "../elements/CustomInput";
import Button from "../elements/Button";

const SigningForm = ({ handleSignup, errors }) => {
  // const handlePhone = (f) => {
  //   var newString = f.substring(1);
  //   return "+212" + newString;
  // };
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
          fname: "",
          lname: "",
          phone: "",
          email: "",
          pwd: "",
        }}
        validationSchema={Yup.object({
          fname: Yup.string().required("required"),
          lname: Yup.string().required("required"),
          phone: Yup.string().min(10, "minimum 10").required("required"),
          email: Yup.string().email("must be an e-mail").required("required"),
          pwd: Yup.string().required("required"),
        })}
        onSubmit={async (data, { setSubmitting }) => {
          // const newPhone = handlePhone(data.phone);
          setSubmitting(true);
          await handleSignup(data);
          setSubmitting(false);
        }}
      >
        {({ handleSubmit, isSubmitting, values }) => (
          <Form className="form first-form">
            <motion.h2 className="form-h2" variants={childAnimations}>
              Create an Account
            </motion.h2>
            <div className="new-form-row">
              <CustomInput
                placeholder="First Name"
                name="fname"
                id="fname"
                bg="transparent"
                animations={childAnimations}
              />
              <CustomInput
                placeholder="Last Name"
                name="lname"
                id="lname"
                bg="transparent"
                animations={childAnimations}
              />
            </div>
            <CustomInput
              placeholder="Phone"
              name="phone"
              id="phone"
              bg="transparent"
              margin="0.5em"
              animations={childAnimations}
            />
            <CustomInput
              placeholder="Email"
              name="email"
              id="email"
              bg="transparent"
              margin="0.5em"
              animations={childAnimations}
            />
            <CustomInput
              placeholder="Password"
              name="pwd"
              id="pwd"
              bg="transparent"
              type="password"
              margin="0.5em"
              animations={childAnimations}
            />
            <AnimatePresence>
              {errors?.status ? (
                <motion.p
                  exit="exit"
                  animate="visible"
                  initial="hidden"
                  variants={childAnimations}
                  className="errors-red"
                >
                  {errors?.message}
                </motion.p>
              ) : null}
            </AnimatePresence>
            <motion.div className="btn-wrp-login" variants={childAnimations}>
              <Button
                radius="12px"
                type="submit"
                color="#fff"
                bg="#393d46"
                border="#393d46"
                hover="#f8f8f8"
                handleClick={handleSubmit}
                title={isSubmitting ? "Creating..." : "Create"}
              />
            </motion.div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SigningForm;

const Container = styled(motion.div)`
  width: 600px;
  min-width: 300px;
  border-radius: 10px;
  padding: 2em 1em;
  .errors-red {
    color: red;
    font-size: 0.9rem;
    margin: 0.5em 0 0 0;
  }
  .new-form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
    width: 100%;
    margin: 0.5em 0;
  }
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

  @media only screen and (max-width: 768px) {
    .new-form-row {
      grid-template-columns: 100% !important;
    }
  }
`;
