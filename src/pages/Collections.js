import React, { useEffect, useState } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import styled from "styled-components";
import CustomHelmet from "../components/elements/CustomHelmet";
import Layout from "../layouts/DefaultLayout";
import CollectionCard from "../components/CartComponents/CollectionCard";
import { newCollections } from "../utils/Products";
import HeaderSkeleton from "../components/skeletons/HeaderSkeleton";
import CollectionCardSkeleton from "../components/skeletons/CollectionCardSkeleton";

const Collections = () => {
  const H2CartVariants = {
    hidden: { opacity: 0, y: "100px" },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  const parentAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.3 },
    },
  };
  const childAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <Layout>
        <SkContainer>
          <HeaderSkeleton />
          <HeaderSkeleton longText={true} />
          <div className="skeleton-collection-cards-container">
            {Array.from(Array(6).keys()).map((index) => {
              return (
                <CollectionCardSkeleton
                  key={`CollectionCardSkeleton-${index}`}
                />
              );
            })}
          </div>
        </SkContainer>
      </Layout>
    );
  }
  return (
    <Layout>
      <Container
        exit={{
          opacity: 0,
          transition: { ease: "easeInOut" },
        }}
      >
        <CustomHelmet title="Collections" />
        <div className="collections-top-wrp">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={H2CartVariants}
          >
            Collections
          </motion.h2>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={H2CartVariants}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </motion.p>
        </div>
        <motion.div
          className="collection-list-wrp"
          initial="hidden"
          animate="show"
          variants={parentAnimations}
        >
          {newCollections.map((item, index) => {
            return (
              <CollectionCard
                name={item.name}
                image={item.img}
                slug={item.slug}
                animations={childAnimations}
                key={`collection-card-${index}`}
              />
            );
          })}
        </motion.div>
      </Container>
    </Layout>
  );
};

export default Collections;

const Container = styled(motion.div)`
  padding: 2em 0;
  margin: 0em 150px;
  .collections-top-wrp {
    h2 {
      color: #393d46;
      font-size: 4rem;
      font-weight: 400;
      line-height: 150%;
      margin-bottom: 0.25em;
    }
    p {
      color: #68768e;
      opacity: 0.7;
      font-weight: 400;
      font-size: 1rem;
    }
  }
  .collection-list-wrp {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2em;
    padding: 4em 0;
  }
  @media only screen and (max-width: 1200px) {
    padding: 2em;
    margin: 0;
    .collections-top-wrp {
      h2 {
        font-size: 30px;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 2em 1.25em;
    .collections-top-wrp {
      h2 {
        font-size: 24px;
        margin-bottom: 1em;
      }
      p {
        font-size: 13px;
      }
    }
    .collection-list-wrp {
      grid-template-columns: 100%;
      padding: 2em 0;
    }
  }
`;
const SkContainer = styled.div`
  padding: 2em 0;
  margin: 0em 150px;
  .skeleton-collection-cards-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2em;
    margin: 2em 0;
  }
  @media only screen and (max-width: 1200px) {
    padding: 2em;
    margin: 0;
  }
  @media only screen and (max-width: 768px) {
    padding: 2em 1em;
    .skeleton-collection-cards-container {
      grid-template-columns: 100%;
    }
  }
`;
