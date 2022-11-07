import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import { ReactComponent as EmailIcon } from "../../assets/email.svg";
import { ReactComponent as PhoneEmail } from "../../assets/phone-call.svg";
import { ReactComponent as LocationIcon } from "../../assets/pin.svg";
import { ReactComponent as FacebookIcon } from "../../assets/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../assets/instagram.svg";
import { ReactComponent as TwitterIcon } from "../../assets/twitter.svg";

const ContactInfo = () => {
  const parentAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delayChildren: 0.5, staggerChildren: 0.3 },
    },
  };
  const childAnimations = {
    hidden: { opacity: 0, y: "50px" },
    show: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <Container animate="show" initial="hidden" variants={parentAnimations}>
      <div className="contact-header extra-padding">
        <motion.h2 variants={childAnimations}>Contact info</motion.h2>
        <motion.p variants={childAnimations}>
          Fill out the form and our team will get back to you within 24 hours
        </motion.p>
      </div>
      <div className="contact-info">
        <motion.div variants={childAnimations} className="channel-info">
          <PhoneEmail />
          <h5 className="span-info">+212 528230735</h5>
        </motion.div>
        <motion.div variants={childAnimations} className="channel-info">
          <LocationIcon />
          <h5 className="span-info">shop.contact@gmail.com</h5>
        </motion.div>
        <motion.div variants={childAnimations} className="channel-info">
          <EmailIcon />
          <h5 className="span-info"> N° 19 Rue Tambouktou Cité El Massira</h5>
        </motion.div>
      </div>
      <div className="socials">
        <motion.div variants={childAnimations} className="socials-svg">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <FacebookIcon />
          </a>
        </motion.div>
        <motion.div variants={childAnimations} className="socials-svg">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <InstagramIcon />
          </a>
        </motion.div>
        <motion.div variants={childAnimations} className="socials-svg">
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <TwitterIcon />
          </a>
        </motion.div>
      </div>
    </Container>
  );
};

export default ContactInfo;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1em;
  color: #faf3e0;
  padding: 1em 2em;
  background: #393d46;
  border-radius: 10px;
  box-shadow: rgb(237 239 247 / 47%) 0px 10px 20px,
    rgb(237 239 247 / 47%) 0px 6px 6px;
  h2 {
    font-size: 2.5rem;
    font-weight: 500 !important;
    letter-spacing: 7px;
    margin: 0.5em 0;
  }
  h5 {
    font-size: 0.9rem;
    font-weight: 300 !important;
    display: inline;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    min-width: 100px;
  }
  p {
    font-size: 0.9rem;
    font-weight: 300;
    margin: 1em 0;
  }
  .channel-info {
    padding: 1em;
    border-radius: 10px;
    font-size: 0.9rem;
    margin: 1em 0;
    cursor: copy;
    transition: all 0.3s ease-in-out;
    display: flex;
    svg {
      margin-right: 1em;
      g {
        path {
          fill: #fff !important;
        }
      }
    }
    &:hover {
      background: #f8f8f8;
      color: #222;
      svg {
        g {
          path {
            fill: #222 !important;
          }
        }
      }
    }
  }
  .socials {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .socials-svg {
      padding: 0.5em;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border-radius: 100%;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        background: #f8f8f8;
        svg {
          path,
          circle {
            fill: #222 !important;
          }
          g {
            path {
              fill: #222 !important;
            }
          }
        }
      }
    }
    svg {
      path,
      circle {
        fill: #fff !important;
      }
      g {
        path {
          fill: #fff !important;
        }
      }
    }
  }
  svg {
    width: 18px;
    height: 18px;
  }
  @media only screen and (max-width: 1000px) {
    padding: 1em;
  }
  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 12px;
    }
    h5 {
      font-size: 12px;
    }
    .channel-info {
      margin: 0.25em 0;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      overflow: hidden;
      svg {
        align-self: center;
        margin: 1em;
        width: 20px;
        height: 20px;
      }
    }
  }
`;
