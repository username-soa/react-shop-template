import React, { useState, useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import Layout from "../layouts/DefaultLayout";
import AuthContext from "../contexts/AuthContext";
import CustomHelmet from "../components/elements/CustomHelmet";
import UserProfileContainer from "../layouts/UserAccountContainer";
import UserAddressCard from "../components/CartComponents/UserAddressCard";
import UserAddressForm from "../components/FormeComponents/UserAddressForm";
import UpdateAddressPopup from "../components/FixedElements/UpdateAddressPopup";

const UserAddress = () => {
  const parentAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.3 },
    },
  };
  const childAnimations = {
    hidden: { opacity: 0, y: "10px" },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  const {
    userAddresses,
    addAddressToBrowser,
    updateAddressInBrowser,
    deleteAddressFromBrowser,
  } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState({ status: null, data: null });

  const addAddress = (data) => {
    addAddressToBrowser(data);
    setShow(false);
  };

  const updateAddress = (data) => {
    updateAddressInBrowser(data);
    setShowModal({ status: null, data: null });
  };

  return (
    <Layout>
      <Container>
        <CustomHelmet title="User Address" />
        <UserProfileContainer title="My Address">
          <motion.div
            animate="show"
            initial="hidden"
            className="user-addresses-container"
            variants={parentAnimations}
          >
            <div className="address-top">
              <motion.h2 className="address-list-h2" variants={childAnimations}>
                Addresses
              </motion.h2>
              {userAddresses.length > 0 || show ? (
                <motion.button
                  className="add-address"
                  variants={childAnimations}
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  {show ? "Cancel" : "Add"}
                </motion.button>
              ) : null}
            </div>
            {show ? (
              <UserAddressForm
                operationType="add"
                handleAddress={addAddress}
                animations={parentAnimations}
              />
            ) : (
              <>
                <motion.p className="address-list-p" variants={childAnimations}>
                  Below is a list of the addresses that you have in your address
                  book. These are a list of addresses you have used to ship
                  orders to other than your primary address.
                </motion.p>
                {userAddresses.length === 0 && (
                  <div className="empty-address-registry">
                    <motion.p
                      variants={childAnimations}
                      className="empty-address-registry-p"
                    >
                      you have't set up any address yet.
                    </motion.p>
                    <motion.button
                      onClick={() => {
                        setShow(!show);
                      }}
                      className="add-address"
                      variants={childAnimations}
                    >
                      Add
                    </motion.button>
                  </div>
                )}
                {userAddresses.length > 0 && (
                  <div className="address-list-container">
                    {userAddresses.map((item, index) => {
                      return (
                        <UserAddressCard
                          address={item}
                          title={item.name}
                          animations={childAnimations}
                          updateAddress={(data) => {
                            setShowModal({ status: true, data: data });
                          }}
                          key={`user-address-card-${index}`}
                          deleteAddress={deleteAddressFromBrowser}
                        />
                      );
                    })}
                  </div>
                )}
              </>
            )}
          </motion.div>
        </UserProfileContainer>
        {showModal.status && (
          <UpdateAddressPopup
            name={showModal.data.name}
            handleClose={() => {
              setShowModal({ status: null, data: null });
            }}
          >
            <UserAddressForm
              user={showModal.data}
              operationType="update"
              animations={parentAnimations}
              handleAddress={updateAddress}
            />
          </UpdateAddressPopup>
        )}
      </Container>
    </Layout>
  );
};

export default UserAddress;

const Container = styled(motion.div)`
  .user-addresses-container {
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
    }
    .address-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .address-list-container {
    gap: 1em;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    padding-top: 1em;
  }
  .address-list-p {
    padding: 0.5em 0;
    color: #68768e;
    font-size: 16px;
    font-weight: 400;
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
  .empty-address-registry {
    padding: 2em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
  }
  .empty-address-registry-p {
    text-align: center;
    padding: 0.5em 0;
    color: #68768e;
    opacity: 0.8;
    font-size: 16px;
    font-weight: 400;
  }
  @media only screen and (max-width: 768px) {
    .address-list-p,
    .empty-address-registry-p {
      font-size: 14px;
    }
  }
`;
