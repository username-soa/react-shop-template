import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

const UserAddressCard = ({
  exists,
  address,
  title,
  animations,
  updateAddress,
  deleteAddress,
}) => {
  return (
    <Container variants={animations}>
      <h5>{title}</h5>
      <div className="user-address-card-row">
        <span>Address 1 : </span>
        <h6>{address?.address1}</h6>
      </div>
      <div className="user-address-card-row">
        <span>Apartment : </span>
        <h6>{address?.address2}</h6>
      </div>
      <div className="user-address-card-row">
        <span>city : </span>
        <h6>{address?.city}</h6>
      </div>
      <div className="user-address-card-row">
        <span>Company : </span>
        <h6>{address?.company}</h6>
      </div>
      <div className="user-address-card-row">
        <span>Country : </span>
        <h6>{address?.country}</h6>
      </div>
      <div className="user-address-card-row">
        <span>Province : </span>
        <h6>{address?.province}</h6>
      </div>
      <div className="user-address-card-row">
        <span>Zip : </span>
        <h6>{address?.zip}</h6>
      </div>
      <div className="user-address-card-row margin-top">
        <button className="update-address">Edit</button>
        <button className="update-address red">Delete</button>
      </div>
    </Container>
  );
};

export default UserAddressCard;

const Container = styled(motion.div)`
  padding: 0.75em 1em;
  border-radius: 12px;
  border: 2px solid #000;
  h5 {
    color: #393d46;
    font-size: 1.2rem;
    margin-bottom: 0.5em;
  }
  h6 {
    color: #abb3c4;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .user-address-card-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    justify-content: space-between;
    padding: 0.15em 0;
    span {
      font-size: 12px;
      color: #393d46;
    }
  }
  .margin-top {
    margin-top: 1em;
  }
  .update-address {
    color: #fff;
    background: #000;
    padding: 7px 10px;
    border-radius: 12px;
    border: 2px solid #000;
    transition: all 0.3s ease-in-out;
    font-size: 12px;
    &:hover {
      background: RGBA(159, 162, 180, 0.08);
      color: #000;
    }
    &.red {
      background: red;
      color: #fff;
      border: 2px solid red;
      &:hover {
        background: RGBA(159, 162, 180, 0.08);
        color: red;
      }
    }
  }
`;
