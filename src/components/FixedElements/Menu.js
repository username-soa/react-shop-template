import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";
import MenuLink from "./MenuLink";
import MenuLinkParent from "./MenuLinkParent";
import { ReactComponent as AccessoriesIcone } from "../../assets/headset.svg";
import { ReactComponent as AboutUs } from "../../assets/aboutus.svg";
import { ReactComponent as Category } from "../../assets/category.svg";
import { ReactComponent as ContactUs } from "../../assets/contactus.svg";
import { ReactComponent as CloseIcone } from "../../assets/cancel.svg";
import { ReactComponent as BrandIcone } from "../../assets/brand.svg";
import { ReactComponent as LogoIcone } from "../../assets/logo.svg";
import { ReactComponent as FacebookIcone } from "../../assets/facebook.svg";
import { ReactComponent as InstagramIcone } from "../../assets/instagram.svg";
import { ReactComponent as TwitterIcone } from "../../assets/twitter.svg";
import { ReactComponent as FaqsIcone } from "../../assets/faq.svg";
import { ReactComponent as TrustIcone } from "../../assets/trust.svg";
import { ReactComponent as ContractIcone } from "../../assets/contract.svg";
import { ReactComponent as ShippingIcone } from "../../assets/delivery.svg";
import {
  menuNavigationCategories,
  menuContainerVariants,
} from "../../utils/Variables";
import { collectionList } from "../../utils/Products";

const Menu = ({ sideMenu, setSideMenu }) => {
  let isMounted = true;
  const handleTitle = (name) => {
    if (name?.toLowerCase().includes("home-")) {
      return name.replace("home-", "");
    } else {
      return name;
    }
  };

  return (
    <Container
      sideMenu={sideMenu}
      animate="visible"
      initial="hidden"
      exit="exit"
      variants={menuContainerVariants}
    >
      <div className="links">
        <div className="links-top">
          <div className="links-top-menu-icon">
            <CloseIcone
              onClick={() => {
                setSideMenu(false);
              }}
            />
          </div>
          <div className="links-top-header-right">
            <button onClick={() => setSideMenu(false)}>
              <NavLink to="/" className="top-link">
                <motion.h2
                  animate="visible"
                  initial="hidden"
                  exit="exit"
                  variants={menuNavigationCategories}
                  className="links-top-h2"
                >
                  Digital Era.
                </motion.h2>
              </NavLink>
            </button>
          </div>
        </div>
        <div className="links-content">
          <MenuLinkParent SvgComp={AccessoriesIcone} title="Suivez-nous sur">
            <MenuLink
              to="https://www.facebook.com"
              title="Facebook"
              external
              SvgIcon={FacebookIcone}
              state={sideMenu}
              setState={setSideMenu}
            />
            <MenuLink
              to="https://www.instagram.com"
              title="Instagram"
              external
              SvgIcon={InstagramIcone}
              state={sideMenu}
              setState={setSideMenu}
            />
            <MenuLink
              to="https://www.twitter.com"
              title="Twitter"
              external
              SvgIcon={TwitterIcone}
              state={sideMenu}
              setState={setSideMenu}
            />
          </MenuLinkParent>
          <MenuLinkParent SvgComp={AccessoriesIcone} title="À Propos De Nous">
            <MenuLink
              to="/about"
              title="À Propos"
              SvgIcon={AboutUs}
              state={sideMenu}
              setState={setSideMenu}
            />
            <MenuLink
              to="/contact"
              title="Contact"
              SvgIcon={ContactUs}
              state={sideMenu}
              setState={setSideMenu}
            />
          </MenuLinkParent>
          <MenuLinkParent SvgComp={AccessoriesIcone} title="Support">
            <MenuLink
              to="/privacy-policy"
              title="Politique de confidentialité"
              SvgIcon={TrustIcone}
              state={sideMenu}
              setState={setSideMenu}
            />
            <MenuLink
              to="/livraison"
              title="Politique d'expédition"
              SvgIcon={ShippingIcone}
              state={sideMenu}
              setState={setSideMenu}
            />
            <MenuLink
              to="/termes-conditions"
              title="Termes et conditions"
              SvgIcon={ContractIcone}
              state={sideMenu}
              setState={setSideMenu}
            />
            <MenuLink
              to="/faqs"
              title="FAQs"
              SvgIcon={FaqsIcone}
              state={sideMenu}
              setState={setSideMenu}
            />
          </MenuLinkParent>
          <MenuLinkParent SvgComp={AccessoriesIcone} title="Catégories">
            {collectionList?.map((c, index) => {
              return (
                <MenuLink
                  to={`/collections/${c?.id}`}
                  title={handleTitle(c?.title)}
                  SvgIcon={Category}
                  state={sideMenu}
                  setState={setSideMenu}
                  key={`menu-link1_${index}`}
                />
              );
            })}
          </MenuLinkParent>
        </div>
      </div>
    </Container>
  );
};
export default Menu;

const Container = styled(motion.div)`
  width: 100%;
  button {
    background: transparent;
  }
  svg {
    cursor: pointer;
  }
  .links-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 150px;
    width: 100vw;
    .links-top-h2 {
      font-size: 2rem;
      font-weight: 600;
      color: #fff;
      padding: 0 1em;
    }
    .links-top-menu-icon {
      background: #393d46;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 150px;
      svg {
        width: 30px;
        height: 30px;
      }
    }
    .links-top-header-right {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0 1em;
    }
  }
  .links {
    width: 100%;
    height: 100vh;
    padding-bottom: 0.5em;
    transition: all 0.3s;
    width: 100%;
    background: #393d46;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    .link-logo {
      width: 100px;
      height: 80px;
      img {
      }
    }
    .close-menu {
      display: flex;
      padding: 1em 2em;
      align-items: center;
      justify-content: flex-start;
    }
  }
  .links-content {
    padding: 0em 1em;
    display: flex;
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 1000px) {
    .links-top {
      height: 100px;
      .links-top-menu-icon {
        width: 100px;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .links-top {
      justify-content: space-between;
      .links-top-h2 {
        font-size: 1.25rem;
      }
    }
    .links-content {
      padding: 0;
    }
    .logo {
      svg {
        margin: 0 0.5em;
      }
    }
  }
`;
