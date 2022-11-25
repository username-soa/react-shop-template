import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { motion, useInView } from "framer-motion/dist/framer-motion";
import CustomDataList from "../../components/elements/CustomDataList";

const ProductsFilters = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const parentAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.3 },
    },
  };
  const childAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  return (
    <Container ref={ref}>
      <Formik
        enableReinitialize={true}
        initialValues={{
          type: [],
          size: [],
          style: [],
          availability: [],
        }}
        onSubmit={(data) => {
          return data;
        }}
      >
        {({ submitForm, handleChange, values, resetForm }) => (
          <>
            <Form className="form first-form">
              <motion.div
                className="filters-desktop-container"
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                variants={parentAnimations}
              >
                <CustomDataList
                  index={0}
                  name="Style"
                  animations={childAnimations}
                >
                  <ul>
                    <li>
                      <label>
                        <Field
                          onChange={(e) => {
                            handleChange(e);
                            submitForm();
                          }}
                          type="checkbox"
                          name="style"
                          value="Style filter 1"
                        />
                        Style filter 1
                      </label>
                    </li>
                    <li>
                      <label>
                        <Field
                          onChange={(e) => {
                            handleChange(e);
                            submitForm();
                          }}
                          type="checkbox"
                          name="style"
                          value="Style filter 2"
                        />
                        Style filter 2
                      </label>
                    </li>
                    <li>
                      <label>
                        <Field
                          onChange={(e) => {
                            handleChange(e);
                            submitForm();
                          }}
                          type="checkbox"
                          name="style"
                          value="Style filter 3"
                        />
                        Style filter 3
                      </label>
                    </li>
                    <li>
                      <label>
                        <Field
                          onChange={(e) => {
                            handleChange(e);
                            submitForm();
                          }}
                          type="checkbox"
                          name="style"
                          value="Style filter 4"
                        />
                        Style filter 4
                      </label>
                    </li>
                  </ul>
                </CustomDataList>
                <CustomDataList
                  index={1}
                  name="Availability"
                  animations={childAnimations}
                >
                  <ul>
                    <li>
                      <label>
                        <Field
                          onChange={(e) => {
                            handleChange(e);
                            submitForm();
                          }}
                          type="checkbox"
                          name="availability"
                          value="In stock"
                        />
                        In stock
                      </label>
                    </li>
                    <li>
                      <label>
                        <Field
                          onChange={(e) => {
                            handleChange(e);
                            submitForm();
                          }}
                          type="checkbox"
                          name="availability"
                          value="Out of stock"
                        />
                        Out of stock
                      </label>
                    </li>
                  </ul>
                </CustomDataList>
                <CustomDataList
                  index={2}
                  name="Product type"
                  animations={childAnimations}
                >
                  <ul>
                    <li>
                      <label>
                        <Field
                          onChange={(e) => {
                            handleChange(e);
                            submitForm();
                          }}
                          type="checkbox"
                          name="type"
                          value="Type filter 1"
                        />
                        Type filter 1
                      </label>
                    </li>
                    <li>
                      <label>
                        <Field
                          onChange={(e) => {
                            handleChange(e);
                            submitForm();
                          }}
                          type="checkbox"
                          name="type"
                          value="Type filter 2"
                        />
                        Type filter 2
                      </label>
                    </li>
                    <li>
                      <label>
                        <Field
                          onChange={(e) => {
                            handleChange(e);
                            submitForm();
                          }}
                          type="checkbox"
                          name="type"
                          value="Type filter 3"
                        />
                        Type filter 3
                      </label>
                    </li>
                    <li>
                      <label>
                        <Field
                          onChange={(e) => {
                            handleChange(e);
                            submitForm();
                          }}
                          type="checkbox"
                          name="type"
                          value="Type filter 4"
                        />
                        Type filter 4
                      </label>
                    </li>
                  </ul>
                </CustomDataList>
                <CustomDataList
                  index={3}
                  name="Size"
                  animations={childAnimations}
                >
                  <ul>
                    <li>
                      <label>
                        <Field
                          onChange={(e) => {
                            handleChange(e);
                            submitForm();
                          }}
                          type="checkbox"
                          name="size"
                          value="XS"
                        />
                        XS
                      </label>
                    </li>
                    <li>
                      <label>
                        <Field
                          onChange={(e) => {
                            handleChange(e);
                            submitForm();
                          }}
                          type="checkbox"
                          name="size"
                          value="XL"
                        />
                        XL
                      </label>
                    </li>
                    <li>
                      <label>
                        <Field
                          onChange={(e) => {
                            handleChange(e);
                            submitForm();
                          }}
                          type="checkbox"
                          name="size"
                          value="L"
                        />
                        L
                      </label>
                    </li>
                    <li>
                      <label>
                        <Field
                          onChange={(e) => {
                            handleChange(e);
                            submitForm();
                          }}
                          type="checkbox"
                          name="size"
                          value="M"
                        />
                        M
                      </label>
                    </li>
                    <li>
                      <label>
                        <Field
                          onChange={(e) => {
                            handleChange(e);
                            submitForm();
                          }}
                          type="checkbox"
                          name="size"
                          value="S"
                        />
                        S
                      </label>
                    </li>
                  </ul>
                </CustomDataList>
              </motion.div>
            </Form>
            {values.style.length > 0 &&
              values.availability.length &&
              values.type.length &&
              values.size.length && (
                <div className="filter-values">
                  {[
                    ...values.style,
                    ...values.availability,
                    ...values.type,
                    ...values.size,
                  ].map((item, index) => {
                    return (
                      <span
                        className="filter-values-item"
                        key={`filter-values-item-${index}`}
                      >
                        {item}
                      </span>
                    );
                  })}
                  {[
                    ...values.style,
                    ...values.availability,
                    ...values.type,
                    ...values.size,
                  ].length > 0 && (
                    <button className="clear-all-btn" onClick={resetForm}>
                      Clear All
                    </button>
                  )}
                </div>
              )}
          </>
        )}
      </Formik>
      <motion.div
        className="filters-mobile-container"
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={parentAnimations}
        onClick={() => {
          setShow(!show);
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 16.4444V18.2222H9.33333V16.4444H4ZM4 5.77778V7.55556H12.8889V5.77778H4ZM12.8889 20V18.2222H20V16.4444H12.8889V14.6667H11.1111V20H12.8889ZM7.55556 9.33333V11.1111H4V12.8889H7.55556V14.6667H9.33333V9.33333H7.55556ZM20 12.8889V11.1111H11.1111V12.8889H20ZM14.6667 9.33333H16.4444V7.55556H20V5.77778H16.4444V4H14.6667V9.33333Z"
            fill="black"
          ></path>
        </svg>
        <motion.h5 variants={childAnimations}>Filter & Sort</motion.h5>
      </motion.div>
      {show && (
        <Formik
          enableReinitialize={true}
          initialValues={{
            type: [],
            size: [],
            style: [],
            availability: [],
          }}
          onSubmit={(data) => {
            return data;
          }}
        >
          {({ submitForm, handleChange, values, resetForm }) => (
            <>
              <Form>
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={parentAnimations}
                  className="filter-mobile-content"
                >
                  <motion.div
                    variants={childAnimations}
                    className="filter-mobile-content-row"
                  >
                    <h5 className="filter-mobile-h5">Style</h5>
                    <ul>
                      <li>
                        <label>
                          <Field
                            onChange={(e) => {
                              handleChange(e);
                              submitForm();
                            }}
                            type="checkbox"
                            name="style"
                            value="Style filter 1"
                          />
                          Style filter 1
                        </label>
                      </li>
                      <li>
                        <label>
                          <Field
                            onChange={(e) => {
                              handleChange(e);
                              submitForm();
                            }}
                            type="checkbox"
                            name="style"
                            value="Style filter 2"
                          />
                          Style filter 2
                        </label>
                      </li>
                      <li>
                        <label>
                          <Field
                            onChange={(e) => {
                              handleChange(e);
                              submitForm();
                            }}
                            type="checkbox"
                            name="style"
                            value="Style filter 3"
                          />
                          Style filter 3
                        </label>
                      </li>
                      <li>
                        <label>
                          <Field
                            onChange={(e) => {
                              handleChange(e);
                              submitForm();
                            }}
                            type="checkbox"
                            name="style"
                            value="Style filter 4"
                          />
                          Style filter 4
                        </label>
                      </li>
                    </ul>
                  </motion.div>
                  <motion.div
                    variants={childAnimations}
                    className="filter-mobile-content-row"
                  >
                    <h5 className="filter-mobile-h5">Availability</h5>
                    <ul>
                      <li>
                        <label>
                          <Field
                            onChange={(e) => {
                              handleChange(e);
                              submitForm();
                            }}
                            type="checkbox"
                            name="availability"
                            value="In stock"
                          />
                          In stock
                        </label>
                      </li>
                      <li>
                        <label>
                          <Field
                            onChange={(e) => {
                              handleChange(e);
                              submitForm();
                            }}
                            type="checkbox"
                            name="availability"
                            value="Out of stock"
                          />
                          Out of stock
                        </label>
                      </li>
                    </ul>
                  </motion.div>
                  <motion.div
                    variants={childAnimations}
                    className="filter-mobile-content-row"
                  >
                    <h5 className="filter-mobile-h5">Product type</h5>
                    <ul>
                      <li>
                        <label>
                          <Field
                            onChange={(e) => {
                              handleChange(e);
                              submitForm();
                            }}
                            type="checkbox"
                            name="type"
                            value="Type filter 1"
                          />
                          Type filter 1
                        </label>
                      </li>
                      <li>
                        <label>
                          <Field
                            onChange={(e) => {
                              handleChange(e);
                              submitForm();
                            }}
                            type="checkbox"
                            name="type"
                            value="Type filter 2"
                          />
                          Type filter 2
                        </label>
                      </li>
                      <li>
                        <label>
                          <Field
                            onChange={(e) => {
                              handleChange(e);
                              submitForm();
                            }}
                            type="checkbox"
                            name="type"
                            value="Type filter 3"
                          />
                          Type filter 3
                        </label>
                      </li>
                      <li>
                        <label>
                          <Field
                            onChange={(e) => {
                              handleChange(e);
                              submitForm();
                            }}
                            type="checkbox"
                            name="type"
                            value="Type filter 4"
                          />
                          Type filter 4
                        </label>
                      </li>
                    </ul>
                  </motion.div>
                  <motion.div
                    variants={childAnimations}
                    className="filter-mobile-content-row"
                  >
                    <h5 className="filter-mobile-h5">Size</h5>
                    <ul>
                      <li>
                        <label>
                          <Field
                            onChange={(e) => {
                              handleChange(e);
                              submitForm();
                            }}
                            type="checkbox"
                            name="size"
                            value="XS"
                          />
                          XS
                        </label>
                      </li>
                      <li>
                        <label>
                          <Field
                            onChange={(e) => {
                              handleChange(e);
                              submitForm();
                            }}
                            type="checkbox"
                            name="size"
                            value="X"
                          />
                          X
                        </label>
                      </li>
                      <li>
                        <label>
                          <Field
                            onChange={(e) => {
                              handleChange(e);
                              submitForm();
                            }}
                            type="checkbox"
                            name="size"
                            value="L"
                          />
                          L
                        </label>
                      </li>
                      <li>
                        <label>
                          <Field
                            onChange={(e) => {
                              handleChange(e);
                              submitForm();
                            }}
                            type="checkbox"
                            name="size"
                            value="M"
                          />
                          M
                        </label>
                      </li>
                      <li>
                        <label>
                          <Field
                            onChange={(e) => {
                              handleChange(e);
                              submitForm();
                            }}
                            type="checkbox"
                            name="size"
                            value="S"
                          />
                          S
                        </label>
                      </li>
                    </ul>
                  </motion.div>
                </motion.div>
              </Form>
              {values.style.length > 0 &&
                values.availability.length &&
                values.typ.lengthe &&
                values.size.length && (
                  <div className="filter-values">
                    {[
                      ...values.style,
                      ...values.availability,
                      ...values.type,
                      ...values.size,
                    ].map((item, index) => {
                      return (
                        <span
                          className="filter-values-item"
                          key={`filter-values-item-${index}`}
                        >
                          {item}
                        </span>
                      );
                    })}
                    {[
                      ...values.style,
                      ...values.availability,
                      ...values.type,
                      ...values.size,
                    ].length > 0 && (
                      <button className="clear-all-btn" onClick={resetForm}>
                        Clear All
                      </button>
                    )}
                  </div>
                )}
            </>
          )}
        </Formik>
      )}
    </Container>
  );
};

export default ProductsFilters;

const Container = styled(motion.div)`
  margin-top: 4em;
  padding: 0 150px;
  .filter-values {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
    padding: 1em 0;
    .filter-values-item {
      background: #ddd;
      padding: 6px 10px;
      border-radius: 10px;
      font-size: 12px;
    }
    .clear-all-btn {
      background: #000;
      padding: 6px 10px;
      border-radius: 10px;
      font-size: 12px;
      color: #fff;
    }
  }
  .filters-desktop-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
  }
  ul {
    column-count: 2;
    column-gap: 2rem;
    list-style: none;
    li {
      display: flex;
      align-items: center;
      padding: 0.25em 0;
    }
  }
  input {
    margin-right: 0.5em;
    accent-color: #34495e;
  }
  label {
    font-size: 13px;
    color: #393d46;
  }
  .filters-mobile-container {
    display: none;
  }
  .filter-mobile-content {
    padding: 1em 0;
    display: none;
    .filter-mobile-h5 {
      color: #393d46;
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 2em;
      margin-bottom: 0.25em;
    }
    .filter-mobile-content-row {
      padding: 0 0.5em;
    }
  }
  @media only screen and (max-width: 1200px) {
    padding: 0 1em;
  }
  @media only screen and (max-width: 900px) {
    .filters-desktop-container {
      display: none;
    }
    .filters-mobile-container {
      display: flex;
      align-items: center;
      gap: 0.5em;
      padding: 5px 0;
      cursor: pointer;
      h5 {
        color: #393d46;
        font-size: 1rem;
        font-weight: 400;
        transition: all 0.3s ease;
        &:hover {
          opacity: 0.6;
        }
      }
    }
    .filter-mobile-content {
      display: flex;
      flex-direction: column;
      gap: 1em;
    }
  }
`;
