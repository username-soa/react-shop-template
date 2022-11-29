import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { motion } from "framer-motion/dist/framer-motion";
import * as Yup from "yup";
import Button from "../elements/Button";
import CustomInput from "../elements/CustomInput";

const UserAddressForm = ({ updateAddress, user, animations }) => {
  return (
    <Container animate="show" initial="hidden" variants={animations}>
      <h2 className="form-h2">Adding a new address</h2>
      <Formik
        enableReinitialize={true}
        initialValues={{
          name: "",
          address1: user?.address1 || "",
          address2: user?.address2 || "",
          city: user?.city || "",
          company: user?.company || "",
          country: user?.country || "",
          province: user?.province || "",
          zip: user?.zip || "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("required"),
          address1: Yup.string().required("required"),
          address2: Yup.string(),
          city: Yup.string().required("required"),
          company: Yup.string().required("required"),
          country: Yup.string(),
          province: Yup.string().required("required"),
          zip: Yup.string().required("required"),
        })}
        onSubmit={async (data) => {
          await updateAddress(data);
        }}
      >
        {({ handleSubmit, isSubmitting, values }) => (
          <Form className="form first-form">
            <CustomInput placeholder="Address name" name="name" id="name" />
            <CustomInput placeholder="Address" name="address1" id="address1" />
            <CustomInput
              placeholder="Apartment (optional)"
              name="address2"
              id="address2"
            />
            <CustomInput placeholder="Company" name="company" id="company" />
            <CustomInput placeholder="Pays" name="country" id="country" />
            <CustomInput placeholder="Province" name="province" id="province" />
            <CustomInput placeholder="City" name="city" id="city" />
            <CustomInput placeholder="Zip" name="zip" id="zip" />
            <div className="btn-wrp-form">
              <Button
                bg="#fff"
                color="#393d46"
                border="#393d46"
                hover="#393d46"
                radius="12px"
                title={isSubmitting ? "Saving..." : "Save"}
                handleClick={handleSubmit}
              />
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default UserAddressForm;

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

  input {
    width: 100%;
  }
  .btn-wrp-form {
    > div {
      width: fit-content;
      margin: 0.5em auto;
    }
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
