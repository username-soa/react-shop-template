import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import Layout from "../layouts/DefaultLayout";
import CustomHelmet from "../components/elements/CustomHelmet";
import HomeMainCart from "../components/CartComponents/HomeMainCart";
import HomeAdvantagesCart from "../components/CartComponents/HomeAdvantagesCart";
import HomePartnersCart from "../components/CartComponents/HomePartenersCart";
import HomeTopCollections from "../components/CartComponents/HomeTopCollections";
import CollectionSkeleton from "../components/skeletons/CollectionSkeleton";
import ProductCartSkeleton from "../components/skeletons/ProductCartSkeleton";
import HeaderSkeleton from "../components/skeletons/HeaderSkeleton";
import NewsLetterV2 from "../components/FixedElements/NewsLetterV2";
import SimilarProductsList from "../components/CartComponents/SimilarProductList";
import { productList } from "../utils/Products";

const Home = () => {
  const [loading, setLoading] = useState(!true);
  const [popup, setPopup] = useState(false);

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
          <CollectionSkeleton margin maxHeight />

          <div className="page-row">
            <HeaderSkeleton />
          </div>
          <div className="page-row row-2">
            <ProductCartSkeleton />
            <ProductCartSkeleton />
            <ProductCartSkeleton />
            <ProductCartSkeleton />
            <ProductCartSkeleton />
          </div>
          <div className="page-row row-1">
            <CollectionSkeleton />
            <CollectionSkeleton />
          </div>
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
  }

  return (
    <Layout>
      <Container
        exit={{
          opacity: 0,
          transition: { ease: "easeInOut" },
        }}
      >
        <CustomHelmet title="Home" />
        <HomeMainCart />
        <SimilarProductsList name="Fresh Arrivals" products={productList} />
        <HomeTopCollections />
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

export default Home;

const Container = styled(motion.div)``;
