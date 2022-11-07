import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import Layout from "../layouts/DefaultLayout";
import CustomHelmet from "../components/elements/CustomHelmet";
import ContactForm from "../components/FormeComponents/ContactForm";
import ContactInfo from "../components/FixedElements/ConactInfo";

const ContactPage = () => {
  const [feedback, setFeedback] = useState({ status: null, message: null });
  const sendMessage = async (data) => {
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
        <CustomHelmet title="Contact us" />
        <ContactInfo />
        <ContactForm handleClick={sendMessage} feedback={feedback} />
        {/* {feedback?.status ? (
        <FeedBack bg="#000" color="#fff" message={feedback?.message} />
      ) : null} */}
      </Container>
    </Layout>
  );
};

export default ContactPage;

const Container = styled(motion.div)`
  height: 100%;
  padding: 2em 150px;
  display: flex;
  flex-direction: column;
  gap: 2em;

  @media only screen and (max-width: 1200px) {
    padding: 2em;
  }
  @media only screen and (max-width: 768px) {
    padding: 1em;
  }
`;
