import React from "react";
import styled from "styled-components";
import SkeletonElement from "./SkeletonElement";
import Shimmer from "./Shimmer";

const CollectionSkeleton = ({ margin, maxHeight }) => {
  return (
    <Container
      maxHeight={maxHeight}
      className={
        margin ? `skeleton-wrapper light extra-m` : `skeleton-wrapper light`
      }
    >
      <div className="skeleton-cell">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="title" />
      </div>
      <div className="skeleton-cell">
        <SkeletonElement type="image-sk" />
      </div>
      <Shimmer />
    </Container>
  );
};

export default CollectionSkeleton;

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  box-shadow: rgb(237 239 247 / 47%) 0px 10px 20px,
    rgb(237 239 247 / 47%) 0px 6px 6px;
  min-height: ${({ maxHeight }) =>
    maxHeight ? "calc(100vh - 170px)" : "500px"};
  &.extra-m {
    margin: 0em 150px !important;
  }
  .skeleton-cell {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1em;
  }
  @media only screen and (max-width: 1200px) {
    &.extra-m {
      margin: 1em !important;
    }
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 100% !important;
    grid-template-rows: 1fr 1fr;
    min-height: unset;
  }
`;
