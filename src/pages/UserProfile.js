import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import Layout from "../layouts/DefaultLayout";
import CustomHelmet from "../components/elements/CustomHelmet";
import UserProfileContainer from "../layouts/UserAccountContainer";
import UserInfoForm from "../components/FormeComponents/UserInfoForm";

const UserProfilePage = () => {
  const updateUserInfo = async (data) => {
    return data;
  };
  const updateUserPassword = async (data) => {
    return data;
  };

  const parentAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.3 },
    },
  };
  const childAnimations = {
    hidden: { opacity: 0, y: "100px" },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <Layout>
      <Container>
        <CustomHelmet title="User Profile" />
        <UserProfileContainer title="My Account">
          <motion.div
            animate="show"
            initial="hidden"
            className="profile-page-content"
            variants={parentAnimations}
          >
            <motion.h2 className="profile-page-h2" variants={childAnimations}>
              User Account
            </motion.h2>
            <UserInfoForm
              updateInfo={updateUserInfo}
              updatePassword={updateUserPassword}
              animations={childAnimations}
            />
          </motion.div>
        </UserProfileContainer>
      </Container>
    </Layout>
  );
};

export default UserProfilePage;

const Container = styled(motion.div)`
  .profile-page-content {
    background: #fff;
    border-radius: 12px;
    padding: 1em;
    box-shadow: rgb(237 239 247 / 47%) 0px 10px 20px,
      rgb(237 239 247 / 47%) 0px 6px 6px;
  }
  .profile-page-h2 {
    color: #393d46;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2em;
    text-transform: capitalize;
    margin-bottom: 0.25em;
  }
`;
