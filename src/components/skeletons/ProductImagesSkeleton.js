import React from "react";
import styled from "styled-components";
import SkeletonElement from "./SkeletonElement";
import Shimmer from "./Shimmer";

const ProductImagesSkeleton = ({ margin }) => {
  return (
    <Container
      className={
        margin ? `skeleton-wrapper light extra-m-p` : `skeleton-wrapper light`
      }
    >
      <div className="product-images-skeleton-cell-2 ">
        <SkeletonElement type="image-sk" />
        <SkeletonElement type="image-sk" />
      </div>
      <div className="product-images-skeleton-cell-1 ">
        <SkeletonElement type="image-sk" />
      </div>

      <Shimmer />
    </Container>
  );
};

export default ProductImagesSkeleton;

const Container = styled.div`
  min-height: 300px;
  box-shadow: rgb(237 239 247 / 47%) 0px 10px 20px,
    rgb(237 239 247 / 47%) 0px 6px 6px;
  &.extra-m-p {
    margin: 1em 150px !important;
  }
  .product-images-skeleton-cell-1,
  .product-images-skeleton-cell-2 {
    padding: 1em;
    height: 100%;
  }
  .product-images-skeleton-cell-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
  }

  @media only screen and (max-width: 1200px) {
    &.extra-m-p {
      margin: 0em !important;
    }
    .product-images-skeleton-cell-2 {
      display: none;
    }
    .product-images-skeleton-cell-1 {
      display: flex;
    }
  }
  @media only screen and (max-width: 768px) {
    .product-images-skeleton-cell-2 {
      display: none;
    }
  }
`;
