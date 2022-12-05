import React from "react";
import styled from "styled-components";
import { useField } from "formik";

const CustomInput2 = ({
  Icon,
  margin,
  label,
  required,
  textarea,
  id,
  bg,
  border,
  width,
  radius,
  ...props
}) => {
  const [field, meta] = useField(props);

  const togglePassword = (id) => {
    const input = document.getElementById(id);
    if (input) {
      if (input.type === "password") {
        input.type = "text";
      } else {
        input.type = "password";
      }
    }
  };

  return (
    <Container
      bg={bg}
      width={width}
      margin={margin}
      radius={radius}
      border={border}
    >
      {label ? (
        <label htmlFor={props.id || props.name}>
          {label} {required ? <span className="red">*</span> : null}
        </label>
      ) : null}

      <div className="input-wrp">
        {Icon && (
          <div className="input-svg">
            <Icon className="input-svg" />
          </div>
        )}
        {!textarea ? (
          <input className="input" id={id} {...field} {...props} />
        ) : (
          <textarea className="input" {...field} {...props} rows="8" />
        )}

        {props.type === "password" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18.875"
            height="14"
            viewBox="0 0 18.875 14"
            onClick={() => togglePassword(id)}
            className="show-pwd-svg"
          >
            <g id="eye" transform="translate(-0.5 -3.5)">
              <path
                id="Path_17"
                data-name="Path 17"
                d="M1,10.5S4.25,4,9.938,4s8.937,6.5,8.937,6.5S15.625,17,9.938,17,1,10.5,1,10.5Z"
                fill="none"
                stroke="#393d46"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              />
              <circle
                id="Ellipse_18"
                data-name="Ellipse 18"
                cx="3"
                cy="3"
                r="3"
                transform="translate(7 7.5)"
                strokeWidth="1"
                stroke="#393d46"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </g>
          </svg>
        ) : null}
      </div>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </Container>
  );
};

export default CustomInput2;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : "inherit")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  overflow: hidden;
  label {
    font-size: 15px;
    font-weight: 600;
    color: #4d4d4d;
    margin-bottom: 0.35em;
    margin-top: 1.5em;
  }
  input,
  textarea {
    background: transparent;
    height: 48px;
    font-size: 15px;
    padding: 0 5px;
    border: none;
    outline: none;
    border-bottom: 1px solid #fff;
    color: #fff;
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #ddd;
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #ddd;
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: #ddd;
    }
  }
  .error {
    font-size: 12px;
    color: red;
    font-weight: 600;
    margin-top: 0.5em;
  }
  .input-wrp {
    position: relative;
  }
  .show-pwd-svg {
    right: 10px;
  }
  .show-pwd-svg,
  .input-svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .input-svg {
    left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  svg {
    cursor: pointer;
    width: 24px;
    height: 24px;
  }
  .red {
    color: red;
  }

  @media only screen and (max-width: 768px) {
    /* margin: 0 !important; */
  }
`;
