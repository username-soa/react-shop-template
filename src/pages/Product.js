import React, { useEffect, useState } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import styled from "styled-components";
import Layout from "../layouts/DefaultLayout";
import CustomHelmet from "../components/elements/CustomHelmet";
import ProductInfoSkeleton from "../components/skeletons/ProductInfoSkeleton";
import ProductCartSkeleton from "../components/skeletons/ProductCartSkeleton";
import ProductImagesSkeleton from "../components/skeletons/ProductImagesSkeleton";
import HeaderSkeleton from "../components/skeletons/HeaderSkeleton";
import { productList } from "../utils/Products";
import SimilarProductsList from "../components/CartComponents/SimilarProductList";
import ProductInfoV2 from "../components/CartComponents/ProductInfoV2";
import GalleryModal from "../components/FixedElements/GalleryModal";
import product1 from "../assets/product-test.PNG";
import product2 from "../assets/product-test1.PNG";
import product3 from "../assets/product-test2.PNG";
import product4 from "../assets/product-test3.PNG";

const Product = () => {
  const imageList = [
    {
      id: 1,
      img: product1,
    },
    {
      id: 2,
      img: product2,
    },
    {
      id: 3,
      img: product3,
    },
    {
      id: 4,
      img: product4,
    },
    {
      id: 5,
      img: product3,
    },
    {
      id: 6,
      img: product4,
    },
  ];
  const getNextImage = (id) => {
    const tempImg = imageList.find((element) => element.id === id);
    setTempImage({ id: id, url: tempImg.img });
  };
  const [loading, setLoading] = useState(true);
  const [popup, setPopUp] = useState(false);
  const [tempImage, setTempImage] = useState({ id: null, url: null });
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
          <div className="page-row row-3 full-height">
            <ProductImagesSkeleton />
            <ProductInfoSkeleton />
          </div>
          <div className="page-row">
            <HeaderSkeleton />
          </div>
          <div className="page-row row-2">
            {Array.from(Array(12).keys()).map((index) => {
              return (
                <ProductCartSkeleton key={`ProductCartSkeleton-${index}`} />
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
        <CustomHelmet title="Product details" />
        <ProductInfoV2
          images={imageList}
          clickImage={(id, url) => {
            setPopUp(true);
            setTempImage({ id: id, url: url });
          }}
        />
        <SimilarProductsList name="Similar Product" products={productList} />
        {popup && (
          <GalleryModal
            handleClose={setPopUp}
            handleNext={getNextImage}
            img={tempImage?.url}
            imgId={tempImage.id}
            imagesLength={imageList?.length}
          />
        )}
      </Container>
    </Layout>
  );
};

export default Product;

const Container = styled(motion.div)`
  padding: 2em;
  .product-info-top {
    display: grid;
    grid-template-columns: 50% 50%;
    min-height: calc(100vh - 200px);
  }
  .similar-products-h2 {
    color: #393d46;
    font-size: 4rem;
    font-weight: 400;
    line-height: 2em;
    margin: 1em 0;
  }
  .similar-products-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    padding: 0 150px;
  }
  @media only screen and (max-width: 1400px) {
    .similar-products-container {
      padding: 0;
    }
  }
  @media only screen and (max-width: 1200px) {
    .product-info-top {
      grid-template-columns: 100% !important;
      grid-template-rows: auto auto;
    }
    .similar-products-h2 {
      font-size: 30px;
    }
  }
  @media only screen and (max-width: 768px) {
    .similar-products-h2 {
      font-size: 24px;
    }
  }

  @media only screen and (max-width: 500px) {
    padding: 2em 1em;
  }
`;

const SkContainer = styled.div``;
