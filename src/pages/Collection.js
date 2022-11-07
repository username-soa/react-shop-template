import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion/dist/framer-motion";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Layout from "../layouts/DefaultLayout";
import CustomHelmet from "../components/elements/CustomHelmet";
import HomeMainCart from "../components/CartComponents/HomeMainCart";
import CollectionSkeleton from "../components/skeletons/CollectionSkeleton";
import ProductCartSkeleton from "../components/skeletons/ProductCartSkeleton";
import HeaderSkeleton from "../components/skeletons/HeaderSkeleton";
import { productList, collectionList } from "../utils/Products";
import SimilarProductsList from "../components/CartComponents/SimilarProductList";

const Collection = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [collection, setCollection] = useState({});
  const getEvent = (slug) => {
    setCollection(collectionList.find((item) => item.slug === slug));
    console.log(
      "collection details is : ",
      collectionList.find((item) => item.slug === slug)
    );
  };

  useEffect(() => {
    getEvent(slug);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [slug]);

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
            <ProductCartSkeleton />
            <ProductCartSkeleton />
            <ProductCartSkeleton />
            <ProductCartSkeleton />
            <ProductCartSkeleton />
            <ProductCartSkeleton />
            <ProductCartSkeleton />
          </div>
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
        <CustomHelmet title="Collection details" />
        <HomeMainCart collection data={collection} />
        <SimilarProductsList name="Product List" products={productList} />
      </Container>
    </Layout>
  );
};

export default Collection;

const Container = styled(motion.div)``;
