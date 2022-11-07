import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as FacebookIcone } from "../../assets/facebook.svg";
import { ReactComponent as InstagramIcone } from "../../assets/instagram.svg";
import { ReactComponent as TwitterIcone } from "../../assets/twitter.svg";
import crats from "../../assets/credit.png";

const Footer = () => {
  return (
    <Container>
      <div className="top-footer">
        <div className="tbd">
          <h4 className="title-h4">About us</h4>
          <Link to="/about">
            <h4 className="data">Home</h4>
          </Link>
          <Link to="/about">
            <h4 className="data">About</h4>
          </Link>
          <Link to="/contact">
            <h4 className="data">Contact</h4>
          </Link>
        </div>
        <div className="about-us">
          <h4 className="title-h4">SUPPORT</h4>
          <Link to="/faqs">
            <h4 className="data">FAQs</h4>
          </Link>
          <Link to="/privacy-policy">
            <h4 className="data">Privacy Policy</h4>
          </Link>
          <Link to="/terms-conditions">
            <h4 className="data">Terms & Conditions</h4>
          </Link>
        </div>
        <div className="contact">
          <h4 className="title-h4">Find us</h4>
          <h4 className="data">+212 528230735</h4>
          <h4 className="data">shop.contact@gmail.com</h4>
          <h4 className="data">
            N° 19 Rue Tambouktou Cité El Massira Agadir, Maroc
          </h4>
        </div>
      </div>
      <div className="bottom-footer">
        <div>
          <span className="data">© {new Date().getFullYear()} Shop</span>
        </div>
        <div>
          <img src={crats} alt="credit-cards" />
        </div>
        <div className="socials">
          <a
            className="social-link"
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcone />
          </a>
          <a
            className="social-link"
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcone />
          </a>
          <a
            className="social-link"
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcone />
          </a>
        </div>
      </div>
    </Container>
  );
};
export default Footer;

const Container = styled.div`
  background: #393d46;
  padding: 2em 150px;
  a {
    width: fit-content;
  }
  .top-footer {
    height: 100%;
    padding: 2em 0em 2em;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  h4 {
    color: #68768e;
    font-weight: 500;
    font-size: 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: inline;
    margin: 0.25em 0;
  }
  .title-h4 {
    margin-bottom: 1em;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: all 0.4s;
    font-size: 14px;
  }
  .data {
    margin-bottom: 0.5em;
    color: #abb3c4;
    cursor: pointer;
    &:hover {
      color: #fff;
      white-space: nowrap;
    }
  }
  .tbd,
  .about-us,
  .contact {
    padding: 0 0.5em;
    display: flex;
    flex-direction: column;
  }

  .bottom-footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 1em;
    transition: all 0.3s ease-in-out;
    .socials {
      display: flex;
      gap: 0.75em;
    }
    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      line-height: 40px;
      background: #fff;
      border: 1px solid #dadada;
      text-align: center;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      svg {
        width: 18px;
        height: 18px;
        margin: 0 0.75em;
        cursor: pointer;
        fill: #393d46 !important;
        path,
        circle {
          fill: #393d46 !important;
        }
        g {
          path {
            fill: #393d46 !important;
          }
        }
      }
      &:hover {
        background: #393d46;
        opacity: 0.7;
        fill: #68768e !important;
        svg {
          path {
            fill: #fff !important;
          }
          g {
            path {
              fill: #fff !important;
            }
          }
          circle {
            fill: #fff !important;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1200px) {
    /* margin: 1em; */
    padding: 2em;
  }
  @media only screen and (max-width: 940px) {
    .top-footer {
      grid-template-columns: 100% !important;
      grid-template-rows: auto;
      gap: 2em;
    }
    .bottom-footer {
      svg {
        margin: 0 0.5em;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .bottom-footer {
      flex-direction: column;
      align-items: center;
      > div {
        margin: 1em 0;
      }
    }
  }
  @media only screen and (max-width: 400px) {
    .top-footer {
      padding: 2em 0;
    }
  }
`;
