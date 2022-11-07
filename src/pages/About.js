import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import Layout from "../layouts/DefaultLayout";
import CustomHelmet from "../components/elements/CustomHelmet";
import HomeAdvantagesCart from "../components/CartComponents/HomeAdvantagesCart";
import ExtraAdvantagesCart from "../components/CartComponents/ExtraAdvanatagesCart";
import HomePartnersCart from "../components/CartComponents/HomePartenersCart";
import AboutUsCart from "../components/CartComponents/AboutUsCart";
import NewsLetterV2 from "../components/FixedElements/NewsLetterV2";

const AboutPage = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Layout>
      <Container
        exit={{
          opacity: 0,
          transition: { ease: "easeInOut" },
        }}
      >
        <CustomHelmet title="About US" />
        <AboutUsCart />
        <ExtraAdvantagesCart />
        <HomeAdvantagesCart />
        <HomePartnersCart />
        <NewsLetterV2
          handleEmail={() => {
            setPopup(!popup);
          }}
        />
      </Container>
    </Layout>
  );
};

export default AboutPage;

const Container = styled(motion.div)``;
