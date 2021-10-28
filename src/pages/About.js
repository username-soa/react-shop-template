import React, { useContext } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../layouts/DefaultLayout";
import CustomHelmet from "../components/elements/CustomHelmet";
import HomeAdvantagesCart from "../components/CartComponents/HomeAdvantagesCart";
import ExtraAdvantagesCart from "../components/CartComponents/ExtraAdvanatagesCart";
import HomePartnersCart from "../components/CartComponents/HomePartenersCart";
import AboutUsCart from "../components/CartComponents/AboutUsCart";

const AboutPage = () => {
  return (
    <Layout>
      <Container
        exit={{
          opacity: 0,
          transition: { ease: "easeInOut" },
        }}
      >
        <CustomHelmet title="À propos de nous" />
        <AboutUsCart />
        <HomeAdvantagesCart />
        <ExtraAdvantagesCart />
        <HomePartnersCart />
      </Container>
    </Layout>
  );
};

export default AboutPage;

const Container = styled(motion.div)``;
