import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import CustomHelmet from "../components/elements/CustomHelmet";
import Layout from "../layouts/DefaultLayout";
import FAQsSection from "../components/CartComponents/FAQsSection";
import FAQsContact from "../components/CartComponents/FAQsContact";
import { Link } from "react-router-dom";
import shopInfo from "../utils/general";

const FAQs = () => {
  const H2Animations = {
    hidden: { opacity: 0, y: "100px" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "Inertia" },
    },
  };

  const data = [
    {
      title: `I am a customer and I have a question regarding my purchase. Who should I contact ?`,
      content: (
        <p>
          We are always here to accompany you throughout the process ! If you
          are a customer, you can check or ask help with your order here or call
          customer service on {shopInfo.phone}, or see the page of
          <Link to="/contact">contact</Link>
          for more information.
        </p>
      ),
    },
    {
      title: `How can I keep up to date with the latest news from ${shopInfo.name}?`,
      content: (
        <p>
          For the latest from {shopInfo.name}, please subscribe to our
          newsletter
        </p>
      ),
    },
    {
      title: `Where can I find ${shopInfo.name}'s privacy policy ?`,
      content: (
        <p>
          You can find the privacy policy on the page
          <Link to="/privacy-policy">Privacy Policy</Link>.
        </p>
      ),
    },
    {
      title: `Where can I find out more about the ${shopInfo.name} store ?`,
      content: (
        <p>
          You can find all the information about the {shopInfo.name}'s store on
          the page <Link to="/about">About US.</Link>
        </p>
      ),
    },
  ];

  return (
    <Layout>
      <Container
        exit={{
          opacity: 0,
          transition: { ease: "easeInOut" },
        }}
      >
        <CustomHelmet title="FAQs" />
        <motion.h2
          animate="visible"
          initial="hidden"
          variants={H2Animations}
          className="popular-brands-h2"
        >
          Frequently Asked Questions
        </motion.h2>
        <FAQsSection title="FAQS Section's example." data={data} />
        <FAQsSection title="FAQS Section's example." data={data} />
        <FAQsSection title="FAQS Section's example." data={data} />
        <FAQsSection title="FAQS Section's example." data={data} />
        <FAQsSection title="FAQS Section's example." data={data} />
        <FAQsSection title="FAQS Section's example." data={data} />
        <FAQsContact />
      </Container>
    </Layout>
  );
};

export default FAQs;

const Container = styled(motion.div)`
  padding: 2em 150px;
  .popular-brands-h2 {
    color: #393d46;
    font-size: 3.5rem;
    font-weight: 500;
    line-height: 2em;
    letter-spacing: 2px;
  }

  @media only screen and (max-width: 1200px) {
    padding: 2em;
    .popular-brands-h2 {
      font-size: 30px;
      margin: 1em 0;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 1em;
    .popular-brands-h2 {
      font-size: 24px;
    }
  }
`;
