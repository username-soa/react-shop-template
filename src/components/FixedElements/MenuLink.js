import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const MenuLink = ({ to, title, external }) => {
  return (
    <Container>
      <NavLink
        exact
        className="dash-link"
        to={
          external
            ? {
                pathname: to,
              }
            : to
        }
        target={external ? "_blank" : null}
      >
        <span className="link-title">{title}</span>
      </NavLink>
    </Container>
  );
};

export default MenuLink;

const Container = styled.div`
  width: 100% !important;
  background: transparent;
  &:hover {
    .link-title {
      color: #000;
      background-color: #fff;
      text-transform: capitalize;
      padding: 1px 10px !important;
    }
  }
  .dash-link {
    padding: 0.5em;
    cursor: pointer;
    svg {
      margin-right: 0.75em;
      fill: #abb3c4 !important;
      transition: all 0.4s;
      width: 15px;
      height: 15px;
      g {
        path {
          fill: #abb3c4 !important;
        }
      }
    }
  }
  .link-title {
    color: #fff;
    opacity: 0.9;
    padding: 1px 0;
    font-weight: 700;
    line-height: 1.2;
    font-size: 1.1rem;
    position: relative;
    white-space: nowrap;
    transition: all 0.4s;
    display: inline-block;
    text-transform: uppercase;
  }
`;
