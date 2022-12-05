import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import Layout from "../layouts/DefaultLayout";
import CustomHelmet from "../components/elements/CustomHelmet";
import ContactInfo from "../components/FixedElements/ConactInfo";
import NoticePopup from "../components/FixedElements/NoticePopup";
import NewsLetterV2 from "../components/FixedElements/NewsLetterV2";
import ContactForm from "../components/FormeComponents/ContactForm";

const ContactPage = () => {
  const [popup, setPopup] = useState(false);
  const sendMessage = async (data) => {
    setPopup(!popup);
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
        <div className="contact-page-content">
          <ContactInfo />
          <ContactForm handleClick={sendMessage} />
        </div>
        <NewsLetterV2
          handleEmail={() => {
            setPopup(!popup);
          }}
        />
        {popup && (
          <NoticePopup
            title="Notice"
            description="This is only a UI template, for demonstration purposes only. All the data existing on this website is static. that goes for the products, login and signing up logic, cart logic,the contact form, newsletter form, and search functionality."
            handleClose={() => {
              setPopup(!popup);
            }}
          />
        )}
      </Container>
    </Layout>
  );
};

export default ContactPage;

const Container = styled(motion.div)`
  .contact-page-content {
    display: grid;
    grid-template-columns: 350px auto;
    grid-gap: 1em;
    padding: 2em 150px;
  }
  height: 100%;
  @media only screen and (max-width: 1400px) {
    .contact-page-content {
      display: flex;
      flex-direction: column;
      gap: 2em;
    }
  }
  @media only screen and (max-width: 1200px) {
    .contact-page-content {
      padding: 2em;
    }
  }
  @media only screen and (max-width: 768px) {
    .contact-page-content {
      padding: 1em;
    }
  }
`;
