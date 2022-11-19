import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

const CustomDataList = ({ name, children, animations, index }) => {
  function closeAll(index) {
    var len = document.getElementsByTagName("details").length;
    for (var i = 0; i < len; i++) {
      if (i != index) {
        document.getElementsByTagName("details")[i].removeAttribute("open");
      }
    }
  }

  return (
    <Container
      variants={animations}
      onClick={() => {
        closeAll(index);
      }}
    >
      <summary>
        <span>{name}</span>
        <svg
          width="8"
          height="16"
          viewBox="0 0 8 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.227252 0.852252C0.446922 0.632583 0.803078 0.632583 1.02275 0.852252L7.77275 7.60225C7.99242 7.82192 7.99242 8.17808 7.77275 8.39775L1.02275 15.1477C0.803078 15.3674 0.446922 15.3674 0.227252 15.1477C0.00758251 14.9281 0.00758251 14.5719 0.227252 14.3523L6.5795 8L0.227252 1.64775C0.00758251 1.42808 0.00758251 1.07192 0.227252 0.852252Z"
            fill="currentColor"
          ></path>
        </svg>
      </summary>
      <div className="data-list-extra">{children}</div>
    </Container>
  );
};

export default CustomDataList;
const Container = styled(motion.details)`
  position: relative;
  border-radius: 12px;

  summary {
    gap: 1em;
    border: 0.1rem solid #e6e6e6;
    border-radius: 5px;
    margin: 0;
    padding: 0.75em 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      border: 0.1rem solid #000;
    }
    span {
      color: #68768e;
    }
    svg {
      width: 18px;
      height: 18px;
      transform: rotate(90deg);
      path {
        fill: #68768e;
      }
    }
  }

  .data-list-extra {
    position: absolute;
    top: calc(100% + 1.0001px);
    left: 0;
    border: 0.1rem solid #e6e6e6;
    border-radius: 5px;
    box-shadow: none;
    background-color: #fff;
    overflow-y: auto;
    padding: 1em;
    min-width: 350px;
  }
`;
