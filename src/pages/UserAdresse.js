import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import Layout from "../layouts/DefaultLayout";
import CustomHelmet from "../components/elements/CustomHelmet";
import UserProfileContainer from "../layouts/UserAccountContainer";
import UserAddressForm from "../components/FormeComponents/UserAddressForm";

const UserAdresse = () => {
  const updateAddress = async (data) => {
    return data;
  };

  return (
    <Layout>
      <Container>
        <CustomHelmet title="User Address" />
        <UserProfileContainer title="My Address">
          <UserAddressForm updateAddress={updateAddress} />
        </UserProfileContainer>
      </Container>
    </Layout>
  );
};

export default UserAdresse;

const Container = styled(motion.div)``;
