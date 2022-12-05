import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";
import MenuLink from "./MenuLink";
import MenuLinkParent from "./MenuLinkParent";
import { ReactComponent as AboutIcon } from "../../assets/svgs/about.svg";
import { ReactComponent as CloseIcon } from "../../assets/svgs/cancel.svg";
import { ReactComponent as SocialsIcon } from "../../assets/svgs/socials.svg";
import { ReactComponent as SupportIcon } from "../../assets/svgs/support.svg";
import { ReactComponent as CollectionIcon } from "../../assets/svgs/collection.svg";

import {
  menuNavigationCategories,
  menuContainerVariants,
} from "../../utils/Variables";
import { collectionList } from "../../utils/Products";
import shopInfo from "../../utils/general";

const Menu = ({ sideMenu, setSideMenu }) => {
  const handleTitle = (name) => {
    if (name?.toLowerCase().includes("home-")) {
      return name.replace("home-", "");
    } else {
      return name;
    }
  };
  const parentAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delayChildren: 0.1, staggerChildren: 0.2 },
    },
  };
  const childAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  return (
    <Container
      sideMenu={sideMenu}
      animate="visible"
      initial="hidden"
      exit="exit"
      variants={menuContainerVariants}
    >
      <motion.div
        animate="show"
        initial="hidden"
        variants={parentAnimations}
        className="links"
      >
        <div className="links-top">
          <motion.div
            variants={childAnimations}
            className="links-top-menu-icon"
          >
            <CloseIcon
              onClick={() => {
                setSideMenu(false);
              }}
            />
          </motion.div>
          <motion.div
            variants={childAnimations}
            className="links-top-header-right"
          >
            <button onClick={() => setSideMenu(false)}>
              <NavLink to="/" className="top-link">
                <motion.h2
                  animate="visible"
                  initial="hidden"
                  exit="exit"
                  variants={menuNavigationCategories}
                  className="links-top-h2"
                >
                  {shopInfo.name}.
                </motion.h2>
              </NavLink>
            </button>
          </motion.div>
        </div>
        <div className="links-content">
          <MenuLinkParent
            SvgComp={SocialsIcon}
            title="Socials"
            animations={childAnimations}
          >
            <MenuLink to={shopInfo.facebook} title="Facebook" external />
            <MenuLink to={shopInfo.instagram} title="Instagram" external />
            <MenuLink to={shopInfo.twitter} title="Twitter" external />
          </MenuLinkParent>
          <MenuLinkParent
            SvgComp={AboutIcon}
            title="About"
            animations={childAnimations}
          >
            <MenuLink to="/about" title="About" />
            <MenuLink to="/contact" title="Contact" />
          </MenuLinkParent>
          <MenuLinkParent
            SvgComp={SupportIcon}
            title="Support"
            animations={childAnimations}
          >
            <MenuLink to="/faqs" title="FAQs" />
            <MenuLink to="/privacy-policy" title="Privacy policy" />
            <MenuLink to="/terms-conditions" title="Terms & Conditions" />
          </MenuLinkParent>
          <MenuLinkParent
            SvgComp={CollectionIcon}
            title="Collections"
            animations={childAnimations}
          >
            <MenuLink to="/collections/all" title="All" />
            {collectionList
              .sort((a, b) => a.name.length - b.name.length)
              .map((c, index) => {
                return (
                  <MenuLink
                    key={`menu-link1-${index}`}
                    title={handleTitle(c?.name)}
                    to={`/collections/${c?.slug}`}
                  />
                );
              })}
          </MenuLinkParent>
        </div>
      </motion.div>
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
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 700px;
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
      padding: 2em 0;
      .links-top-h2 {
        font-size: 1.25rem;
      }
    }
    .links-content {
      margin: 0;
      padding: 0 1em;
      grid-template-columns: 100%;
      width: 100%;
    }
    .logo {
      svg {
        margin: 0 0.5em;
      }
    }
  }
`;
