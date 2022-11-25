import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import { useParams, useHistory, Link } from "react-router-dom";
import Layout from "../layouts/DefaultLayout";
import Button from "../components/elements/Button";
import Spinner from "../components/elements/Spinner";
import SearchTop from "../components/FixedElements/SearchTop";
import CustomHelmet from "../components/elements/CustomHelmet";
import ProductsFilters from "../components/FormeComponents/ProductsFilters";
import SimilarProductsList from "../components/CartComponents/SimilarProductList";
import { productList } from "../utils/Products";

const SearchPage = () => {
  const parentAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delay: 0.3, staggerChildren: 0.3 },
    },
  };
  const childAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };
  let isMounted = true;
  const history = useHistory();
  let { p } = useParams();
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);
  const [empty, setEmpty] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const search = () => {
    history.push(`/search/${term}`);
  };

  useEffect(() => {
    let timer = null;
    if (isMounted) {
      //simulate the loading time
      timer = setTimeout(() => {
        const tempArr = productList.filter((f) =>
          f.name.toLocaleLowerCase().includes(p.toLocaleLowerCase())
        );
        setResult(tempArr);
        setLoading(false);
        setEmpty(tempArr.length === 0);
      }, 1500);
    }
    return () => {
      clearTimeout(timer);
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    return (
      <Layout>
        <LoadingContainer
          exit={{
            opacity: 0,
            transition: { ease: "easeInOut" },
          }}
        >
          <CustomHelmet title="Search" />
          <Spinner />
        </LoadingContainer>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <ErrorContainer
          exit={{
            opacity: 0,
            transition: { ease: "easeInOut" },
          }}
        >
          <CustomHelmet title="Search" />
          <motion.div
            className="not-found"
            initial="hidden"
            animate="show"
            variants={parentAnimations}
          >
            <Link to="/">
              <motion.h2 className="h2-error" variants={childAnimations}>
                Digital Era Search.
              </motion.h2>
            </Link>
            <motion.p className="p-error" variants={childAnimations}>
              An error has occurred, please try again later
            </motion.p>
            <motion.div variants={childAnimations} className="error-input-wrap">
              <input
                type="text"
                placeholder="Search..."
                className="input"
                onChange={(e) => setTerm(e.target.value)}
                value={term}
              />
              <Button
                handleClick={search}
                search
                type="submit"
                bg="#000"
                color="#fff"
                margin="0"
                radius="12px"
              />
            </motion.div>
          </motion.div>
        </ErrorContainer>
      </Layout>
    );
  }

  return (
    <Layout>
      <Container
        exit={{
          opacity: 0,
          transition: { ease: "easeInOut" },
        }}
      >
        <CustomHelmet title="Search" />
        <SearchTop
          handleSearch={search}
          updateSearch={setTerm}
          searchValue={term}
        />

        {empty ? (
          <motion.div
            animate="show"
            initial="hidden"
            className="not-found"
            variants={parentAnimations}
          >
            <motion.h3 className="h3-search-page" variants={childAnimations}>
              No results for "{p}"
            </motion.h3>
            <motion.p
              initial="hidden"
              animate="show"
              variants={childAnimations}
              className="not-fount-term"
            >
              Check the spelling or use a different word or phrase.
            </motion.p>
          </motion.div>
        ) : (
          <>
            <ProductsFilters />
            <SimilarProductsList
              name="Search results"
              products={result}
              showResults
            />
          </>
        )}
      </Container>
    </Layout>
  );
};

export default SearchPage;

const LoadingContainer = styled(motion.div)`
  min-height: calc(100vh - 180px);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const ErrorContainer = styled(motion.div)`
  min-height: calc(100vh - 180px);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .not-found {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
  }
  .h2-error {
    color: #393d46;
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
  }
  .p-error {
    color: #68768e;
    font-size: 15px;
    font-weight: 400;
    text-align: center;
  }
  .error-input-wrap {
    display: flex;
    margin: 1em 0 0.5em 0;
    width: clamp(200px, 300px, 400px);
    &.center {
      margin: 1em auto;
    }
    input {
      width: calc(100% - 52px);
      padding: 9px;
      border-radius: 7px 0 0 7px;
      box-shadow: rgb(237 239 247 / 47%) 6px 6px 6px,
        rgb(237 239 247 / 47%) 0px 0px 0px;
    }
    button {
      margin: 0 0.5em 0 0;
      border-radius: 0 7px 7px 0;
      padding: 10px 15px;
      color: #fff;
      background: #000;
    }
    svg {
      width: 150px;
      height: 150px;
      g {
        fill: #fff !important;
      }
      path {
        fill: #fff !important;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    margin: 1em;
    .h2-error {
      font-size: 30px;
    }
  }

  @media only screen and (max-width: 768px) {
    .h2-error {
      font-size: 22px;
    }
    .error-input-wrap {
      width: 95%;
    }
  }
`;

const Container = styled(motion.div)`
  .not-found {
    margin: 3em 1em 1em 1em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
    justify-content: center;
  }
  .h3-search-page {
    color: #393d46;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 2em;
    text-align: center;
  }
  .not-fount-term {
    color: #68768e;
    font-size: 15px;
    font-weight: 400;
    text-align: center;
  }

  @media only screen and (max-width: 1200px) {
    .h3-search-page {
      font-size: 30px;
    }
    .found-block {
      margin: 1em;
    }
  }

  @media only screen and (max-width: 768px) {
    .h3-search-page {
      font-size: 22px;
    }
  }
`;
