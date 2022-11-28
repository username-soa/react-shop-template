import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import Layout from "../layouts/DefaultLayout";
import CustomHelmet from "../components/elements/CustomHelmet";
import UserProfileContainer from "../layouts/UserAccountContainer";
import UserAddressForm from "../components/FormeComponents/UserAddressForm";
import UserAddressCard from "../components/CartComponents/UserAddressCard";

const UserAddress = () => {
  const updateAddress = async (data) => {
    return data;
  };
  const addressData = [
    {
      name: "Billing Address",
      address1: "2810 Elm Hill Pike",
      address2: "Apartment 222",
      city: "Nashville",
      company: "Company Name",
      country: "United States",
      province: "Tennessee",
      zip: "37214",
    },
    {
      name: "Shipping Address",
      address1: "1711 N Oxnard Blvd 1711 N Oxnard Blvd 1711 N Oxnard Blvd",
      address2: "Apartment 111",
      city: "Oxnard",
      company: "Company Name",
      country: "United States",
      province: "California",
      zip: "93030",
    },
  ];

  const parentAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };
  const childAnimations = {
    hidden: { opacity: 0, y: "100px" },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  const [show, setShow] = useState(false);

  return (
    <Layout>
      <Container>
        <CustomHelmet title="User Address" />
        <UserProfileContainer title="My Address">
          <motion.div
            animate="show"
            initial="hidden"
            className="test-div-container"
            variants={parentAnimations}
          >
            <div className="address-top">
              <motion.h2 className="address-list-h2" variants={childAnimations}>
                Addresses
              </motion.h2>
              <motion.button
                className="add-address"
                variants={childAnimations}
                onClick={() => {
                  setShow(!show);
                }}
              >
                {show ? "Cancel" : "Add"}
              </motion.button>
            </div>
            {show ? (
              <UserAddressForm
                updateAddress={updateAddress}
                animations={parentAnimations}
              />
            ) : (
              <>
                <motion.p className="address-list-p" variants={childAnimations}>
                  Below is a list of the addresses that you have in your address
                  book. These are a list of addresses you have used to ship
                  orders to other than your primary address.
                </motion.p>
                <div className="address-list-container">
                  {addressData.map((item, index) => {
                    return (
                      <UserAddressCard
                        address={item}
                        title={item.name}
                        animations={childAnimations}
                        key={`user-address-card-${index}`}
                      />
                    );
                  })}
                </div>
              </>
            )}
          </motion.div>
        </UserProfileContainer>
      </Container>
    </Layout>
  );
};

export default UserAddress;

const Container = styled(motion.div)`
  .test-div-container {
    background: #fff;
    border-radius: 12px;
    padding: 1em;
    box-shadow: rgb(237 239 247 / 47%) 0px 10px 20px,
      rgb(237 239 247 / 47%) 0px 6px 6px;
    .address-list-h2 {
      color: #393d46;
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 2em;
      text-transform: capitalize;
      margin-bottom: 0.25em;
    }
    .address-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .add-address {
      color: #fff;
      background: #000;
      padding: 10px 15px;
      border-radius: 12px;
      border: 2px solid #000;
      transition: all 0.3s ease-in-out;
      &:hover {
        background: RGBA(159, 162, 180, 0.08);
        color: #000;
      }
    }
    .address-list-p {
      padding: 0.5em 0;
      color: #68768e;
      font-size: 16px;
      font-weight: 400;
    }
    .address-list-container {
      gap: 1em;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      padding-top: 1em;
    }
  }
`;
