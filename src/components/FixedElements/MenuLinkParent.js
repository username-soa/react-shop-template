import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import { menuNavigationCategories } from "../../utils/Variables";

const MenuLinkParent = ({ SvgComp, children, title }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Container
      isActive={isActive}
      animate="visible"
      initial="hidden"
      exit="exit"
      variants={menuNavigationCategories}
    >
      <h4 className="parent-categorie-title">{title}</h4>
      <div className="child-link">{children}</div>
    </Container>
  );
};

export default MenuLinkParent;

const Container = styled(motion.div)`
  margin: 0.5em 1em;
  .parent-categorie-title {
    color: #d8d8d8;
    font-size: 0.875rem;
    font-family: neue-haas-unica, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
`;
