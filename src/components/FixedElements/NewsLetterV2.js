import React, { useRef } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { motion, useInView } from "framer-motion/dist/framer-motion";
import * as Yup from "yup";
import CustomInput2 from "../elements/CustomInputv2";

const NewsLetterV2 = ({ handleEmail }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const parentAnimations = {
    hidden: { y: "100px" },
    show: {
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.3 },
    },
  };
  const childAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };
  return (
    <Container
      ref={ref}
      animate={isInView ? "show" : "hidden"}
      initial="hidden"
      variants={parentAnimations}
    >
      <motion.h2 variants={childAnimations} className="newsletter-h2">
        Stay Informed
      </motion.h2>
      <motion.p variants={childAnimations} className="newsletter-p">
        Sign up for our newsletter to get the latest updates, releases, and
        sales from Digital Era.
      </motion.p>
      <motion.div variants={childAnimations} className="newsletter-form-wrp">
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("email address is invalid")
              .required("required"),
          })}
          onSubmit={async (data, { setSubmitting }) => {
            setSubmitting(true);
            await handleEmail(data);
            setSubmitting(false);
          }}
        >
          {({ handleSubmit, handleChange, values, errors, isSubmitting }) => (
            <Form>
              <CustomInput2
                margin="1.25em 0"
                name="email"
                id="email"
                type="email"
                placeholder="Your Email"
              />
              <div className="newsletter-button-wrp">
                <button className="newsletter-button" onClick={handleSubmit}>
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </motion.div>
    </Container>
  );
};

export default NewsLetterV2;

const Container = styled(motion.div)`
  color: #fff;
  padding: 2em 150px;
  background: #393d46;
  .newsletter-h2 {
    color: #ffffff;
    font-size: 60px;
    font-weight: 400;
    line-height: 1.5em;
    margin-bottom: 0.5em;
  }
  .newsletter-p {
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.8em;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    margin-top: 2em;
    .newsletter-button-wrp {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    > div {
      margin: 0;
      width: 50%;
      input {
        width: 100%;
      }

      button {
        padding: 1em 1.5em;
        background: transparent;
        border: 1px solid #fff;
        color: #fff;
        transition: all 0.3s ease;
        &:hover {
          border: 1px solid #eee;
          color: #393d46;
          background: #fff;
        }
      }
    }
  }
  @media only screen and (max-width: 1200px) {
    padding: 4em 2em;
    .newsletter-h2 {
      font-size: 30px;
    }
    .newsletter-p {
      font-size: 14px;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 2em 2em 1em 2em;
    .newsletter-h2 {
      font-size: 24px;
      margin-bottom: 0.75em;
    }
    .newsletter-p {
      font-size: 12px;
    }
    form {
      > div {
        width: 100%;
        input {
          width: 100%;
        }
        button {
          font-size: 13px;
          padding: 10px 15px;
        }
      }
    }
  }
`;
