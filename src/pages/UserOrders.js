import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import Layout from "../layouts/DefaultLayout";
import CustomHelmet from "../components/elements/CustomHelmet";
import UserProfileContainer from "../layouts/UserAccountContainer";
import UserOrdersList from "../components/CartComponents/UserOrdersList";
import Pagination from "../components/elements/Pagination";
import UserOrdersSkeleton from "../components/skeletons/UserOrdersSkeleton";

const UserOrders = () => {
  const parentAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.3 },
    },
  };
  const childAnimations = {
    hidden: { opacity: 0, y: "100px" },
    show: {
      opacity: 1,
      y: 0,
    },
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <Layout>
        <Container>
          <CustomHelmet title="User Orders" />
          <UserProfileContainer title="User Orders">
            <UserOrdersSkeleton />
          </UserProfileContainer>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <Container>
        <CustomHelmet title="User Orders" />
        <UserProfileContainer title="User Orders">
          <motion.div
            className="orders-page-content"
            variants={parentAnimations}
          >
            <motion.h2 className="orders-page-h2" variants={childAnimations}>
              Orders History
            </motion.h2>
            <UserOrdersList />
            <Pagination
              totalPosts={20}
              currentPage={1}
              postsPerPage={10}
              paginate={() => {
                return null;
              }}
              setCurrentPage={() => {
                return null;
              }}
            />
          </motion.div>
        </UserProfileContainer>
      </Container>
    </Layout>
  );
};

export default UserOrders;

const Container = styled(motion.div)`
  .orders-page-content {
    background: #fff;
    border-radius: 12px;
    padding: 1em;
    box-shadow: rgb(237 239 247 / 47%) 0px 10px 20px,
      rgb(237 239 247 / 47%) 0px 6px 6px;
  }
  .orders-page-h2 {
    color: #393d46;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2em;
    text-transform: capitalize;
    margin-bottom: 0.25em;
  }
`;
