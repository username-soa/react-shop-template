import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import styled from "styled-components";
import ProductInfo from "./ProductInfo";
import ImageZoom from "../elements/ImageZoom";
import "swiper/swiper.scss";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import CustomImage from "../elements/CustomImage";

const ProductInfoV2 = ({ clickImage, images }) => {
  return (
    <Container>
      <div className="product-info-images">
        {images?.map((item, index) => {
          return (
            <CustomImage
              src={item.img}
              alt="product-image"
              width="100%"
              height="100%"
              objectFit="fill"
              onClick={() => clickImage(item.id, item.img)}
              key={`zoomed-img-${index}`}
              styles={{ cursor: "pointer" }}
            />
          );
        })}
      </div>
      <div className="product-info-images-carousel">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {images?.map((item, index) => {
            return (
              <SwiperSlide
                key={`zoomed-img-${index}`}
                onClick={() => {
                  clickImage(item.id, item.img);
                }}
              >
                <img src={item.img} />
              </SwiperSlide>
            );
          })}
          ...
        </Swiper>
      </div>
      <div className="product-info-details">
        <ProductInfo />
      </div>
    </Container>
  );
};

export default ProductInfoV2;

const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: 60% 40%;
  min-height: calc(100vh - 200px);
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    //Center slide text vertically
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .product-info-images {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 1fr 1fr;
    border-radius: 15px 0 0 15px;
    overflow: hidden;
  }
  .product-info-images-carousel {
    display: none;
  }
  .div-image-mock {
    background-color: red;
    aspect-ratio: 1/1;
  }
  .product-info-details {
    height: calc(100vh);
    z-index: 99;
    position: sticky;
    top: 0px;
  }
  @media only screen and (max-width: 1200px) {
    grid-template-columns: 55% 45%;
    .product-info-images {
      grid-template-columns: 1fr;
      grid-gap: 2px;
    }
  }
  @media only screen and (max-width: 900px) {
    grid-template-columns: 100%;
    border-radius: 15px;

    overflow: hidden;
    .product-info-images {
      display: none;
    }
    .product-info-images-carousel {
      display: flex;
    }
    .product-info-details {
      height: fit-content;
      position: unset;
    }
  }
`;
