import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";
import CustomInput from "../elements/CustomInput";
import Button from "../elements/Button";

const ContactForm = ({ feedback, handleClick }) => {
  const history = useHistory();

  const parentAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delayChildren: 0.5, staggerChildren: 0.3 },
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
      <div className="popup-top">
        <motion.h2 variants={childAnimations} className="contact-form-h2">
          Contact Form
        </motion.h2>
      </div>
      <Formik
        enableReinitialize={true}
        initialValues={{
          fname: "",
          lname: "",
          email: "",
          phone: "",
          message: "",
        }}
        validationSchema={Yup.object({
          fname: Yup.string().required("required"),
          lname: Yup.string().required("required"),
          email: Yup.string().email("must be an e-mail").required("required"),
          phone: Yup.string().required("required"),
          message: Yup.string().required("required"),
        })}
        onSubmit={async (data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          await handleClick(data);
          if (feedback?.status === 1 || feedback?.status === null) {
            resetForm();
          }
          setSubmitting(false);
        }}
      >
        {({ handleSubmit, isSubmitting, values }) => (
          <Form className="form first-form">
            <motion.div
              variants={childAnimations}
              className="input-row-contact"
            >
              <CustomInput
                label="First Name"
                name="fname"
                placeholder="First Name"
                id="fname"
                type="text"
              />
            </motion.div>
            <motion.div
              variants={childAnimations}
              className="input-row-contact"
            >
              <CustomInput
                label="Last Name"
                name="lname"
                placeholder="Last Name"
                id="lname"
                type="text"
              />
            </motion.div>
            <motion.div
              variants={childAnimations}
              className="input-row-contact"
            >
              <CustomInput
                label="Email"
                name="email"
                placeholder="Email"
                id="email"
                type="text"
              />
            </motion.div>
            <motion.div
              variants={childAnimations}
              className="input-row-contact"
            >
              <CustomInput
                label="Phone"
                name="phone"
                placeholder="Phone"
                id="phone"
                type="text"
              />
            </motion.div>
            <motion.div
              variants={childAnimations}
              className="input-row-contact extra-margin"
            >
              <CustomInput
                label="Your message"
                name="message"
                placeholder="Your message"
                id="message"
                type="text"
                textarea
              />
            </motion.div>

            <motion.div
              variants={childAnimations}
              className="form-contact-bottom"
            >
              <Button
                handleClick={handleSubmit}
                title={isSubmitting ? "Sending..." : "Send"}
                type="button"
                bg="#393d46"
                color="#fff"
                margin="0.5em"
                radius="12px"
                width="large"
              />
              <Button
                handleClick={(e) => {
                  e.preventDefault();
                  history.push("/");
                }}
                title="Home"
                type="button"
                color="#393d46"
                bg="#fff"
                border="#393d46"
                hover="#393d46"
                margin="0.5em"
                radius="12px"
                width="large"
              />
            </motion.div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ContactForm;

const Container = styled(motion.div)`
  padding: 1em;
  background: #fff;
  border-radius: 10px;
  box-shadow: rgb(237 239 247 / 47%) 0px 10px 20px,
    rgb(237 239 247 / 47%) 0px 6px 6px;
  .contact-form-h2 {
    font-size: 2.5rem;
    font-weight: 500 !important;
    letter-spacing: 7px;
    margin-top: 0.5em;
    color: #222;
  }
  form {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
    height: fit-content;
    margin: 2em 0;
  }
  input,
  textarea {
    width: 95%;
  }
  .extra-margin {
    margin: 0 0.5em;
    grid-column: 1/3;
  }

  .input-row-contact {
    margin: 0.5em 0;
  }
  .popup-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
      cursor: pointer;
      g {
        path {
          fill: #000 !important;
        }
      }
    }
  }
  .back-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 14px;
      height: 14px;
      margin: 0 0.1em;
      transform: rotate(90deg);
    }
    button {
      padding: 1em;
      background: transparent;
    }
  }
  .form-contact-bottom {
    grid-column: 1/3;
    > div {
      width: 120px;
      margin: 0.5em auto;
    }
  }
  @media only screen and (max-width: 1000px) {
    margin: 0;
    box-shadow: none;
    .input-row-contact,
    form {
      margin: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    form {
      grid-template-columns: 100% !important;
      grid-template-rows: auto;
    }
    .contact-form-h2 {
      font-size: 2rem;
      margin: 0.5em 0;
    }
    .form-contact-bottom,
    .extra-margin {
      grid-column: 1/2;
    }
  }
`;
