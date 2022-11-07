import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useRef,
} from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import { useParams, useHistory, Link } from "react-router-dom";
import Layout from "../layouts/DefaultLayout";
import Button from "../components/elements/Button";
import CustomHelmet from "../components/elements/CustomHelmet";
import { ReactComponent as LogoIcone } from "../assets/logo.svg";
import Spinner from "../components/elements/Spinner";
import IsEmpty from "../components/elements/IsEmpty";
import ProductCart from "../components/CartComponents/ProductCard";
import HomeAdvantagesCart from "../components/CartComponents/HomeAdvantagesCart";
import { productList } from "../utils/Products";
import { H2CartVariants } from "../utils/Variables";

const SearchPage = () => {
  let isMounted = true;
  const history = useHistory();
  let { p } = useParams();
  const [term, setTerm] = useState("");
  const [empty, setEmpty] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const search = () => {
    history.push(`/search/${term}`);
  };

  useEffect(() => {
    let timer = null;
    if (isMounted) {
      //generate random boolean as search result
      const random = Math.random() < 0.5;
      console.log(random);
      //simulate the loading time
      timer = setTimeout(() => {
        setLoading(false);
        setEmpty(random);
      }, 2000);
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

  if (empty) {
    return (
      <Layout>
        <ErrorContainer
          exit={{
            opacity: 0,
            transition: { ease: "easeInOut" },
          }}
        >
          <CustomHelmet title="Search" />
          <div className="not-found">
            <Link to="/">
              <motion.h2
                // ref={ref}
                className="h2-search-page"
                initial="hidden"
                animate={true ? "visible" : "hidden"}
                variants={H2CartVariants}
              >
                Digital Era Recherche.
              </motion.h2>
            </Link>

            <IsEmpty
              ovveride="Une erreur s'est produite, veuillez réessayer plus tard"
              bg="transparent"
            />

            <motion.div
              initial="hidden"
              animate={true ? "visible" : "hidden"}
              variants={H2CartVariants}
              className="not-found-input-wrap"
            >
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
          </div>
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
        {empty ? (
          <div className="not-found">
            <Link to="/">
              <motion.h2
                // ref={ref}
                className="h2-search-page"
                initial="hidden"
                animate={true ? "visible" : "hidden"}
                variants={H2CartVariants}
              >
                Digital Era Recherche.
              </motion.h2>
            </Link>
            <motion.h3
              initial="hidden"
              animate={true ? "visible" : "hidden"}
              variants={H2CartVariants}
            >
              Aucun résultat trouvé pour
            </motion.h3>
            <motion.p
              className="not-fount-term"
              initial="hidden"
              animate={true ? "visible" : "hidden"}
              variants={H2CartVariants}
            >
              "{p}"
            </motion.p>
            <motion.h3
              initial="hidden"
              animate={true ? "visible" : "hidden"}
              variants={H2CartVariants}
            >
              Essayez une autre fois
            </motion.h3>
            <motion.div
              initial="hidden"
              animate={true ? "visible" : "hidden"}
              variants={H2CartVariants}
              className="not-found-input-wrap"
            >
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
          </div>
        ) : (
          <div className="found-block">
            <motion.h2
              // ref={ref}
              className="h2-search-page"
              initial="hidden"
              animate={true ? "visible" : "hidden"}
              variants={H2CartVariants}
            >
              Digital Era Recherche.
            </motion.h2>
            <motion.h3
              initial="hidden"
              animate="visible"
              variants={H2CartVariants}
              className="h3-search-page"
            >
              Digital Era vous propose que les produits des meilleures
              entreprises à l'échelle mondiale
            </motion.h3>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={H2CartVariants}
              className="not-found-input-wrap center"
            >
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
            <div className="found-products">
              {productList?.map((i, index) => {
                return (
                  <ProductCart
                    key={`similar-p-${index}`}
                    title={i?.title}
                    price={i?.price}
                    img={i?.img}
                    uid={i?.id}
                    // cid={i?.node?.collections?.edges[0]?.node?.id}
                  />
                );
              })}
            </div>
          </div>
        )}
        <HomeAdvantagesCart />
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
    flex: 1;
    min-height: calc(100vh - 180px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .not-fount-term {
      font-weight: 600;
    }
    h3 {
      font-weight: 300;
    }
    h2 {
      margin-bottom: 1em;
    }
  }
  .not-found-input-wrap {
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
  .h2-search-page {
    color: #393d46;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 2em;
  }
  @media only screen and (max-width: 1200px) {
    margin: 1em;
    .h2-search-page {
      font-size: 30px;
    }
  }

  @media only screen and (max-width: 768px) {
    .h2-search-page {
      font-size: 24px;
    }
  }
`;

const Container = styled(motion.div)`
  margin: 0em;
  .h2-search-page {
    color: #393d46;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 2em;
  }
  .h3-search-page {
    font-weight: 300;
  }
  .not-found-input-wrap {
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
  .not-found {
    flex: 1;
    min-height: calc(100vh - 180px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .not-fount-term {
      font-weight: 600;
    }
    h3 {
      font-weight: 300;
    }
    h2 {
      margin-bottom: 1em;
    }
  }
  .found-products {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    grid-template-rows: auto;
    height: fit-content;
    grid-gap: 1em;
  }
  .found-block {
    margin: 1em 150px;
    .found-block-search {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .input-wrap {
        display: flex;
        height: 80px;
        justify-content: flex-start;
        align-items: center;
      }
      button {
        margin: 0 0.5em 0 0;
        border-radius: 0 7px 7px 0;
        padding: 10px 15px;
        color: #fff;
        background: #000;
      }
      .input {
        padding: 9px;
        font-size: 14px;
        border-radius: 7px 0 0 7px;
        border: 1px solid #000;
        width: 300px;
        background-color: ${(props) => (props.bg ? props.bg : "#fff")};
      }
    }
  }
  @media only screen and (max-width: 1200px) {
    margin: 1em;
    .h2-search-page {
      font-size: 30px;
    }
    .found-block {
      margin: 1em;
    }
  }

  @media only screen and (max-width: 768px) {
    .h2-search-page {
      font-size: 24px;
    }
  }
`;
