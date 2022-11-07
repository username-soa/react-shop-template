import React from "react";
import styled from "styled-components";
import SkeletonElement from "./SkeletonElement";
import Shimmer from "./Shimmer";

const HeaderSkeleton = ({ margin, longText = false }) => {
  return (
    <Container
      className={
        margin ? `skeleton-wrapper light extra-m` : `skeleton-wrapper light`
      }
    >
      <div className="skeleton-cell">
        <SkeletonElement type={longText ? "text" : "title"} />
      </div>

      <Shimmer />
    </Container>
  );
};

export default HeaderSkeleton;

const Container = styled.div`
  box-shadow: rgb(237 239 247 / 47%) 0px 10px 20px,
    rgb(237 239 247 / 47%) 0px 6px 6px;
`;
