import React from "react";
import styled from "styled-components";
import SkeletonElement from "./SkeletonElement";
import Shimmer from "./Shimmer";

const ProductCartSkeleton = ({ margin }) => {
  return (
    <Container
      className={
        margin ? `skeleton-wrapper light extra-m` : `skeleton-wrapper light`
      }
    >
      <div className="skeleton-cell">
        <SkeletonElement type="image-sk" />
      </div>
      <div className="skeleton-cell">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
      </div>
      <Shimmer />
    </Container>
  );
};

export default ProductCartSkeleton;

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  aspect-ratio: 1/1.6;
  box-shadow: rgb(237 239 247 / 47%) 0px 10px 20px,
    rgb(237 239 247 / 47%) 0px 6px 6px;
  &.extra-m {
    margin: 1em 150px !important;
  }
  .skeleton-cell {
    padding: 1em;
  }
  @media only screen and (max-width: 1200px) {
    &.extra-m {
      margin: 1em !important;
    }
  }
`;
