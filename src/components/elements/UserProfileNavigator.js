import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation, useHistory } from "react-router-dom";
import { ReactComponent as PlusIcon } from "../../assets/down-arrow.svg";
import { ReactComponent as InfoIcon } from "../../assets/user2.svg";
import { ReactComponent as AddressIcon } from "../../assets/adress-book.svg";
import { ReactComponent as OrderIcon } from "../../assets/sent.svg";
import { ReactComponent as LogoutIcon } from "../../assets/logout.svg";

const UserProfileNavigator = () => {
  const [expand, setExpand] = useState(0);
  const [highlight, setHighlight] = useState(0);
  let location = useLocation();
  const history = useHistory();

  const checkLocation = () => {
    switch (location.pathname) {
      case "/account":
        return 1;
      case "/account/":
        return 1;
      case "/account/address":
        return 2;
      case "/account/orders":
        return 3;
      case "/account/archive":
        return 4;
      default:
        break;
    }
  };
  const getName = () => {
    switch (location.pathname) {
      case "/account":
        return "Your account information";
      case "/account/address":
        return "Your address information";
      case "/account/orders":
        return "Your orders list";
      case "/account/archive":
        return "Vos archive";
      default:
        break;
    }
  };
  const getSvg = () => {
    switch (location.pathname) {
      case "/account":
        return <InfoIcon />;
      case "/account/address":
        return <AddressIcon />;
      case "/account/orders":
        return <OrderIcon />;

      default:
        break;
    }
  };

  const disconnect = async () => {
    localStorage.removeItem("ec_shopify_token");
    localStorage.removeItem("ec_shopify_accessToken");
    history.push("/");
  };

  return (
    <Container show={highlight}>
      <div
        className={highlight ? "navigation-top active" : "navigation-top"}
        onClick={() => setHighlight(!highlight)}
      >
        <div className="navigation-top-left">
          {getSvg()}
          <span> {getName()}</span>
        </div>
        <PlusIcon
          onClick={() => setHighlight(!highlight)}
          className={highlight ? "rotate" : null}
        />
      </div>
      <div
        className={
          highlight ? "navigation-content active" : "navigation-content"
        }
      >
        <Link to="/account">
          <div
            className={
              checkLocation() === 1
                ? "navigator-link extra-padding navigator-border-bottom active-navigation"
                : "navigator-link extra-padding navigator-border-bottom"
            }
          >
            <InfoIcon />
            Edit Profile
          </div>
        </Link>
        <Link to="/account/address">
          <div
            className={
              checkLocation() === 2
                ? "navigator-link extra-padding navigator-border-bottom active-navigation"
                : "navigator-link extra-padding navigator-border-bottom "
            }
          >
            <AddressIcon />
            Address Book
          </div>
        </Link>
        <Link to="/account/orders">
          <div
            className={
              checkLocation() === 3
                ? "navigator-link extra-padding navigator-border-bottom active-navigation"
                : "navigator-link extra-padding navigator-border-bottom "
            }
          >
            <OrderIcon />
            Order History
          </div>
        </Link>
        <div className="navigator-link extra-padding">
          <LogoutIcon />
          <button onClick={disconnect}>Log Out</button>
        </div>
      </div>
    </Container>
  );
};

export default UserProfileNavigator;

const Container = styled.div`
  background: #fff;
  box-shadow: rgb(237 239 247 / 47%) 0px 10px 20px,
    rgb(237 239 247 / 47%) 0px 6px 6px;
  height: fit-content;
  border-radius: 12px;
  overflow: hidden;
  position: sticky;
  top: 5px;
  z-index: 99;
  .navigator-link {
    color: #676767;
    width: 100%;
    cursor: pointer;
    font-weight: 500;
    font-size: 0.9rem;
    display: grid;
    grid-template-columns: 50px auto;
    transition: all 0.3s ease-in-out;
    svg {
      opacity: 0.4;
      margin: auto;
    }
    button {
      width: 100%;
      height: 100%;
      background: transparent;
      text-align: left;
      font-weight: 500;
      font-size: 0.9rem;
      color: #676767;
    }
    &.active-navigation {
      color: #222 !important;
      font-weight: 600;
      border-right: 3px solid #000;
      background: RGBA(159, 162, 180, 0.08);
      svg {
        opacity: 1;
      }
    }
    &:hover {
      background: RGBA(159, 162, 180, 0.08);
    }
  }
  .extra-padding {
    padding: 1em 0;
  }
  svg {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    width: 18px;
    height: 18px;
    margin-right: 0.5em;
  }

  @media only screen and (min-width: 1200px) {
    .navigation-top {
      display: none;
    }
  }
  @media only screen and (max-width: 1200px) {
    margin-right: 0;
    .navigation-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1em 0;
      margin: 0 1em;
      cursor: pointer;
      svg {
        &.rotate {
          transform: rotate(180deg);
        }
      }
      .navigation-top-left {
        display: flex;
        align-items: center;
      }
    }
    .navigation-content {
      height: 0;
      &:nth-child(n) {
        display: none;
      }
      &.active {
        height: fit-content;
        &:nth-child(n) {
          display: block;
        }
      }
    }
  }
  @media only screen and (max-width: 400px) {
    .navigation-top {
      margin-right: 0.5em;
      svg {
        width: 14px;
        height: 14px;
      }
      .navigation-top-left {
        span {
          font-size: 14px;
        }
      }
    }
    .navigator-link {
      font-size: 13px;
    }
  }
`;
