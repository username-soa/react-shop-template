import React from "react";
import styled from "styled-components";
import SkeletonElement from "./SkeletonElement";
import Shimmer from "./Shimmer";

const ProductInfoSkeleton = ({ margin }) => {
  return (
    <Container
      className={
        margin ? `skeleton-wrapper light extra-m` : `skeleton-wrapper light`
      }
    >
      <div className="skeleton-cell cell-2">
        <SkeletonElement type="title" />
      </div>
      <div className="skeleton-cell cell-2">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
      </div>
      <div className="skeleton-cell cell-3">
        <SkeletonElement type="title" />
        <SkeletonElement type="title" />
      </div>
      <div className="skeleton-cell cell-3">
        <SkeletonElement type="title" />
        <SkeletonElement type="title" />
      </div>
      <div className="skeleton-cell cell-2">
        <SkeletonElement type="title" />
        {Array.from(Array(15).keys()).map((index) => {
          return (
            <SkeletonElement type="text" key={`SkeletonElement-${index}`} />
          );
        })}
      </div>
      <div className="skeleton-cell cell-center">
        <SkeletonElement type="title" />
        <SkeletonElement type="title" />
      </div>

      <Shimmer />
    </Container>
  );
};

export default ProductInfoSkeleton;

const Container = styled.div`
  min-height: 300px;
  box-shadow: rgb(237 239 247 / 47%) 0px 10px 20px,
    rgb(237 239 247 / 47%) 0px 6px 6px;
  &.extra-m {
    margin: 1em 150px !important;
  }
  .skeleton-cell {
    padding: 0.5em 1em;
  }
  .cell-3 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;
  }
  .cell-center {
    > div {
      margin: 1em auto;
    }
  }

  @media only screen and (max-width: 1200px) {
    &.extra-m {
      margin: 1em !important;
    }
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 100% !important;
    grid-template-rows: 1fr 1fr;
  }
`;
