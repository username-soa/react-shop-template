import React from "react";
import styled from "styled-components";
import SkeletonElement from "./SkeletonElement";
import Shimmer from "./Shimmer";

const CollectionCardSkeleton = ({ margin }) => {
  return (
    <Container
      className={
        margin ? `skeleton-wrapper light extra-m` : `skeleton-wrapper light`
      }
    >
      <div>
        <SkeletonElement type="image-sk" />
      </div>
      <div>
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
      </div>
      <Shimmer />
    </Container>
  );
};

export default CollectionCardSkeleton;

const Container = styled.div`
  aspect-ratio: 16/9;
  display: grid;
  grid-template-rows: 1.5fr 0.5fr;
  box-shadow: rgb(237 239 247 / 47%) 0px 10px 20px,
    rgb(237 239 247 / 47%) 0px 6px 6px;
  &.extra-m {
    margin: 1em 150px !important;
  }

  @media only screen and (max-width: 1200px) {
    &.extra-m {
      margin: 1em !important;
    }
  }
`;
