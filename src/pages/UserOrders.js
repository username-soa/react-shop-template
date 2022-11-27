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
          <div>
            <UserOrdersList />
            <Pagination
              postsPerPage={10}
              paginate={() => {
                return null;
              }}
              setCurrrentPage={() => {
                return null;
              }}
              totalPosts={20}
              currentPage={1}
            />
          </div>
        </UserProfileContainer>
      </Container>
    </Layout>
  );
};

export default UserOrders;

const Container = styled(motion.div)`
  /* .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 0.5fr;
    grid-gap: 1em;
    grid-template-rows: auto;
    align-items: center;
    padding: 0.5em 1em;
  } */
`;
