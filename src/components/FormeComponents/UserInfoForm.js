import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { motion } from "framer-motion/dist/framer-motion";
import * as Yup from "yup";
import CustomInput from "../elements/CustomInput";
import Button from "../elements/Button";

const UserInfoForm = ({ updateInfo, updatePassword, user, animations }) => {
  return (
    <Container animate="show" initial="hidden" variants={animations}>
      <h2 className="form-h2">Update your personal information</h2>
      <Formik
        enableReinitialize={true}
        initialValues={{
          fname: user?.firstName || "",
          lname: user?.lastName || "",
          email: user?.email || "",
          phone: user?.phone || "",
        }}
        validationSchema={Yup.object({
          fname: Yup.string().required("required"),
          lname: Yup.string().required("required"),
          email: Yup.string().required("required").email("must be an e-mail"),
          phone: Yup.string().required("required"),
        })}
        onSubmit={async (data) => {
          await updateInfo(data, user?.shopifyID);
        }}
      >
        {({ handleSubmit, isSubmitting, values }) => (
          <Form className="form first-form">
            <CustomInput placeholder="First name" name="fname" id="fname" />
            <CustomInput placeholder="Last name" name="lname" id="lname" />
            <CustomInput placeholder="Email" name="email" id="email" />
            <CustomInput placeholder="Phone" name="phone" id="phone" />

            <div className="btn-wrp-form">
              <Button
                bg="#fff"
                color="#393d46"
                border="#393d46"
                hover="#393d46"
                radius="12px"
                title={isSubmitting ? "Updating..." : "Update"}
                handleClick={handleSubmit}
              />
            </div>
          </Form>
        )}
      </Formik>
      <h2 className="form-h2">Update your password</h2>
      <Formik
        enableReinitialize={true}
        initialValues={{
          oldPwd: "",
          newPwd: "",
          confirmPwd: "",
        }}
        validationSchema={Yup.object({
          oldPwd: Yup.string().required("required"),
          newPwd: Yup.string().required("required"),
          confirmPwd: Yup.string().required("required"),
        })}
        onSubmit={async (data) => {
          await updatePassword(data, user?.shopifyID);
        }}
      >
        {({ handleSubmit, isSubmitting, values }) => (
          <Form className="form first-form">
            <CustomInput
              placeholder="Old Password"
              name="oldPwd"
              id="oldPwd"
              type="password"
            />
            <CustomInput
              placeholder="New Password"
              name="newPwd"
              id="newPwd"
              type="password"
            />
            <CustomInput
              placeholder="Confirm Password"
              name="confirmPwd"
              id="confirmPwd"
              type="password"
            />
            <div className="btn-wrp-form">
              <Button
                bg="#fff"
                color="#393d46"
                border="#393d46"
                hover="#393d46"
                radius="12px"
                title={isSubmitting ? "Updating..." : "Update"}
                handleClick={handleSubmit}
              />
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default UserInfoForm;

const Container = styled(motion.div)`
  form {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
    grid-gap: 0.5em;
  }

  .form-h2 {
    color: #393d46;
    font-size: 1rem;
    font-weight: 500;
    line-height: 2em;
    margin: 0.5em 0 1em 0;
    opacity: 0.7;
  }
  .btn-wrp-form {
    > div {
      width: fit-content;
      margin: 0.5em auto;
    }
  }
  input {
    width: 100%;
  }
  @media only screen and (min-width: 1200px) {
    .btn-wrp-form {
      grid-column: 1/3;
    }
  }
  @media only screen and (max-width: 1200px) {
    margin-top: 1em;
    form {
      grid-template-columns: 100%;
    }
  }
`;
