import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

const MenuLinkParent = ({ SvgComp, children, title, animations }) => {
  return (
    <Container variants={animations}>
      <div className="menu-parent-link-top">
        <SvgComp />
        <h2 className="parent-category-title">{title}</h2>
      </div>
      <div className="child-links">{children}</div>
    </Container>
  );
};

export default MenuLinkParent;

const Container = styled(motion.div)`
  margin: 0.5em 1em;
  .menu-parent-link-top {
    display: flex;
    gap: 0.5em;
    align-items: center;
    margin-bottom: 0.25em;
  }
  svg {
    width: 24px;
    height: 24px;
    fill: #999999;
  }
  .parent-category-title {
    color: #fff;
    font-size: 1.75rem;
    text-transform: uppercase;
  }
  .child-links {
    padding-left: 24px;
  }
  @media only screen and (max-width: 768px) {
    .parent-category-title {
      font-size: 1.6rem;
    }
  }
`;
