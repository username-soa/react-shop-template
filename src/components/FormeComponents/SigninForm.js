import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import logo from "../../assets/thelogo.jpg";
import { ReactComponent as LogoIcone } from "../../assets/logo.svg";
import CustomInput from "../elements/CustomInput";
import Button from "../elements/Button";
import { SigninVariants } from "../../utils/Variables";

const SigninForm = ({ setState, state, handleSignup, errors }) => {
  const handlePhone = (f) => {
    var newstring = f.substring(1);
    return "+212" + newstring;
  };
  return (
    <Container animate="visible" initial="hidden" variants={SigninVariants}>
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
          fname: Yup.string().required("Champ obligatoire"),
          lname: Yup.string().required("Champ obligatoire"),
          phone: Yup.string()
            .min(10, "minimum 10")
            .required("Champ obligatoire"),
          email: Yup.string()
            .email("doit être une adresse e-mail")
            .required("Champ obligatoire"),
          pwd: Yup.string().required("Champ obligatoire"),
        })}
        onSubmit={async (data, { setSubmitting }) => {
          const newPhone = handlePhone(data.phone);
          setSubmitting(true);
          await handleSignup(data, newPhone);
          setSubmitting(false);
        }}
      >
        {({ handleSubmit, isSubmitting, values }) => (
          <Form className="form first-form">
            <div className="svg-wrp">
              <Link to="/">
                <LogoIcone />
              </Link>
            </div>
            <div className="new-form-row">
              <CustomInput
                placeholder="Prénom"
                name="fname"
                id="fname"
                bg="transparent"
              />
              <CustomInput
                placeholder="Nom"
                name="lname"
                id="lname"
                bg="transparent"
              />
            </div>
            <CustomInput
              placeholder="Téléphone"
              name="phone"
              id="phone"
              bg="transparent"
              margin="0.5em"
            />
            <CustomInput
              placeholder="Email"
              name="email"
              id="email"
              bg="transparent"
              margin="0.5em"
            />
            <CustomInput
              placeholder="Mot de passe"
              name="pwd"
              id="pwd"
              bg="transparent"
              type="password"
              margin="0.5em"
            />
            <AnimatePresence>
              {errors?.status ? (
                <motion.p
                  exit="exit"
                  animate="visible"
                  initial="hidden"
                  variants={SigninVariants}
                  className="errors-red"
                >
                  {errors?.message}
                </motion.p>
              ) : null}
            </AnimatePresence>
            <div className="btn-wrp-login">
              <Button
                radius="0"
                type="submit"
                color="#fff"
                bg="#393d46"
                border="#393d46"
                hover="#f8f8f8"
                handleClick={handleSubmit}
                title={isSubmitting ? "S'enregistrer..." : "S'enregistrer"}
                type="submit"
              />
              <Button
                radius="0"
                type="submit"
                title="Se connecter"
                color="#393d46"
                border="#393d46"
                hover="#393d46"
                bg="#fff"
                margin="0.5em"
                padding="10px 30px"
                handleClick={(event) => {
                  event.preventDefault();
                  setState(!state);
                }}
              />
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SigninForm;

const Container = styled(motion.div)`
  width: 600px;
  min-width: 300px;
  border-radius: 10px;
  padding: 2em 1em;
  box-shadow: rgb(237 239 247 / 47%) 0px 10px 20px,
    rgb(237 239 247 / 47%) 0px 6px 6px;
  .errors-red {
    color: red;
    font-size: 0.9rem;
    margin: 0.5em 0 0 0;
  }
  .new-form-row {
    /* margin-top: 1em; */
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
  .svg-wrp {
    display: flex;
    cursor: pointer;
    svg {
      width: 150px;
      height: 50px;
      margin: 1em auto 2em auto;
      path {
        fill: #222 !important;
      }
    }
  }
  .the-logo {
    width: 100px;
    margin: 2em 0;
  }
  .btn-next-step {
    padding: 1em;
    background: transparent;
  }
  .roteted-svg {
    width: 10px;
    height: 10px;
    margin: 0 0.5em;
    transform: rotate(90deg);
  }
  @media only screen and (max-width: 768px) {
    .new-form-row {
      grid-template-columns: 100% !important;
    }
  }
`;
