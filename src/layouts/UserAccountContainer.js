import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import UserProfileNavigator from "../components/elements/UserProfileNavigator";

const UserProfileContainer = ({ children, title }) => {
  return (
    <Container>
      <motion.h2 className="profile-layout-h2">{title}</motion.h2>
      <div className="profile-layout-content">
        <UserProfileNavigator />
        {children}
      </div>
    </Container>
  );
};

export default UserProfileContainer;

const Container = styled.div`
  padding: 1em 150px;
  .profile-layout-content {
    display: grid;
    grid-template-columns: 330px auto;
    gap: 1em;
  }
  .profile-layout-h2 {
    color: #393d46;
    font-size: 3.5rem;
    font-weight: 500;
    line-height: 2em;
    text-transform: capitalize;
    margin-bottom: 0.25em;
  }

  @media only screen and (max-width: 1200px) {
    padding: 2em;
    .profile-layout-content {
      grid-template-columns: 100% !important;
      grid-template-rows: auto;
    }
    .profile-layout-h2 {
      font-size: 30px;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 2em 1em;
    .profile-layout-h2 {
      font-size: 24px;
    }
  }
`;
