import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Layout from "../layouts/DefaultLayout";
import CustomHelmet from "../components/elements/CustomHelmet";
import UserProfileNavigator from "../components/elements/UserProfileNavigator";
import UserProfileContainer from "../layouts/UserAccountContainer";
import UserInfoForm from "../components/FormeComponents/UserInfoForm";

const UserProfilePage = () => {
  const updateUserInfo = async (data) => {
    return data;
  };

  return (
    <Layout>
      <Container
        exit={{
          opacity: 0,
          transition: { ease: "easeInOut" },
        }}
      >
        <CustomHelmet title="Page Profile" />
        <UserProfileContainer>
          <UserProfileNavigator />
          <UserInfoForm updateInfo={updateUserInfo} />
        </UserProfileContainer>
      </Container>
    </Layout>
  );
};

export default UserProfilePage;

const Container = styled(motion.div)``;
