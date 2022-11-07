import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import CustomHelmet from "../components/elements/CustomHelmet";
import Layout from "../layouts/DefaultLayout";
import FAQsSection from "../components/CartComponents/FAQsSection";
import FAQsContact from "../components/CartComponents/FAQsContact";
import { Link } from "react-router-dom";

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
      title: `Je suis client et j'ai une question concernant mon achat. Qui dois-je contacter ?`,
      content: (
        <p>
          Nous sommes toujours là pour vous accompagner tout au long du
          processus ! Si vous êtes un client, vous pouvez vérifier ou demander
          de l'aide pour votre commande ici ou appeler le service client au +212
          528230735, ou bien voir la page de <Link to="/contact">contact</Link>{" "}
          pour plus d'informations.
        </p>
      ),
    },
    {
      title: `Comment puis-je me tenir au courant des dernières nouvelles de Digital Era ?`,
      content: (
        <p>
          Pour les dernières nouvelles de Digital Era, veuillez vous inscrire à
          notre newsletter
        </p>
      ),
    },
    {
      title: `Où puis-je trouver la politique d'expédition de Digital Era ?`,
      content: (
        <p>
          Vous pouvez trouver la politique d'expédition sur la page{" "}
          <Link to="/livraison">Livraison</Link>.
        </p>
      ),
    },
    {
      title: `Où puis-je trouver des informations sur l'entreprise ?`,
      content: (
        <p>
          Vous pouvez trouver tous les information sur le store Digital Era sur
          la page <Link to="/about">A propos.</Link>
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
        <FAQsSection title="FAQS Section's name." data={data} />
        <FAQsSection title="FAQS Section's name." data={data} />
        <FAQsSection title="FAQS Section's name." data={data} />
        <FAQsSection title="FAQS Section's name." data={data} />
        <FAQsSection title="FAQS Section's name." data={data} />
        <FAQsSection title="FAQS Section's name." data={data} />
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
