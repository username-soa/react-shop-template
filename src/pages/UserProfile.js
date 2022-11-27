import React, { useContext } from "react";
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

  return (
    <Layout>
      <Container>
        <CustomHelmet title="User Profile" />
        <UserProfileContainer title="My Account">
          <UserInfoForm updateInfo={updateUserInfo} />
        </UserProfileContainer>
      </Container>
    </Layout>
  );
};

export default UserProfilePage;

const Container = styled(motion.div)``;
