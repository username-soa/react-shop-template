import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import Button from "../elements/Button";
import { ordersList } from "../../utils/orders";

const UserOrdersList = () => {
  const parentAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };
  const childAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };
  return (
    <Container animate="show" initial="hidden" variants={parentAnimations}>
      <div className="table">
        <motion.div className="grid" variants={childAnimations}>
          <h6>#ID</h6>
          <h6>Date</h6>
          <h6>Status</h6>
          <h6>Price</h6>
          <h6 className="empty-h6" />
        </motion.div>
        {ordersList.map((i, index) => {
          return (
            <motion.div
              className="grid hover-grid"
              variants={childAnimations}
              key={`order-item-${index}`}
            >
              <h5>{i.name}</h5>
              <h5>{i.date}</h5>
              <h5>{i.status}</h5>
              <h5>{i.total}</h5>
              <h5 className="empty-h6">
                <Button
                  handleClick={() => {
                    console.log("soon!");
                  }}
                  bg="#fff"
                  color="#393d46"
                  title="Voir plus"
                  border="#393d46"
                  hover="#393d46"
                  margin="0"
                  radius="12px"
                  padding="7px 10px"
                />
              </h5>
            </motion.div>
          );
        })}
      </div>
    </Container>
  );
};

export default UserOrdersList;
const Container = styled(motion.div)`
  h5 {
    font-size: 14px;
    font-weight: 400;
    color: #726e6e;
    display: flex;
    align-items: center;
    white-space: nowrap;
    padding: 1em 0.5em 1em 0;
    position: relative;
    &.h5-no-padding {
      padding: 0.5em !important;
    }
    &.no-border {
      border-bottom: none;
    }
  }
  h6 {
    font-size: 13px;
    font-weight: 600;
    color: #000;
    display: flex;
    align-items: center;
    white-space: nowrap;
    padding: 1em 0.5em 1em 0;
    border-bottom: 1px solid #dfe0eb;
  }
  .empty-h6 {
    height: 47px;
    min-width: 90px;
  }
  .table {
    overflow-x: auto;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 0.5fr;
    grid-template-rows: auto;
    align-items: center;
    padding: 0.5em 1em;
    min-width: 600px;
  }
  .hover-grid {
    border-radius: 12px;
    &:hover {
      > h5 {
        color: #000 !important;
      }
      background: RGBA(159, 162, 180, 0.08);
    }
  }
  @media only screen and (max-width: 1200px) {
    margin-top: 1em;
  }
`;
