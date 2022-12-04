import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
import { useHistory } from "react-router-dom";
import SearchHistoryContext from "../../contexts/SearchHistoryContext";
import { ReactComponent as CloseIcon } from "../../assets/svgs/close.svg";
import { ReactComponent as SearchIcon } from "../../assets/svgs/close.svg";

const Menu = ({ state, setState }) => {
  let isMounted = true;
  const HeaderSearchBarVariants = {
    hidden: { y: "-100vh" },
    visible: {
      y: 0,
      transition: {
        type: "Inertia",
      },
    },
  };
  const parentAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };
  const childAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [searchArr, setSearchArr] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const { saveSearchTermsToBrowser, searchTerms, removeSearchTerm } =
    useContext(SearchHistoryContext);

  const handleSearch = (e) => {
    const t = e.target.value.trim();
    if (e.key === "Enter" && t.length !== 0) {
      saveSearchTermsToBrowser(t);
      setShowHistory(false);
      setState(false);
      history.push(`/search/${t}`);
    }
  };
  const handleSearchV2 = (term) => {
    const t = term.trim();
    if (t.trim().length !== 0) {
      saveSearchTermsToBrowser(t);
      setShowHistory(false);
      setState(false);
      history.push(`/search/${t}`);
    }
  };

  const filterSearchHistory = (term) => {
    if (term.length === 0) {
      setSearchArr(searchTerms);
      return -1;
    }
    const arr = searchTerms?.filter((item) => {
      return item?.toLocaleLowerCase().includes(term?.toLocaleLowerCase());
    });
    setSearchArr(arr);
  };

  useEffect(() => {
    if (isMounted && searchTerms) {
      setSearchArr(searchTerms);
    }
    return () => {
      isMounted = false;
    };
  }, [searchTerms]);

  return (
    <Container
      initial="hidden"
      animate="visible"
      variants={HeaderSearchBarVariants}
      exit={{ opacity: 0, transition: { duration: 0.5, type: "Inertia" } }}
    >
      <div className="search-dropdown-elements">
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
            filterSearchHistory(e.target.value);
          }}
          placeholder="Search..."
          className="search-input"
          onKeyDown={handleSearch}
          onFocus={() => setShowHistory(true)}
        />
        <SearchIcon
          onClick={() => {
            setState(false);
          }}
        />
      </div>
      <AnimatePresence exitBeforeEnter>
        {showHistory && searchArr?.length !== 0 && (
          <motion.div
            initial="hidden"
            animate="show"
            variants={parentAnimations}
            className="saved-search-terms"
          >
            <ul>
              {searchArr?.map((i, index) => {
                return (
                  <motion.li
                    variants={childAnimations}
                    className="saved-term hover-grid"
                    key={`saved-term-${index}`}
                  >
                    <span
                      className="saved-term-span"
                      onClick={() => handleSearchV2(i)}
                    >
                      {i}
                    </span>

                    <CloseIcon
                      onClick={() => {
                        removeSearchTerm(i);
                      }}
                    />
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};
export default Menu;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.9;
  z-index: 999;
  .search-dropdown-elements {
    display: grid;
    grid-template-columns: auto 40px;
    width: 70%;
  }
  .search-input {
    padding: 10px 6px;
    background: transparent;
    color: rgba(0, 0, 0, 0.9);
    border-bottom: 2px solid #fff;
  }
  .search-input::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #fff;
    opacity: 1; /* Firefox */
  }

  .search-input::-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #fff;
  }

  .search-input::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #fff;
  }
  svg {
    cursor: pointer;
    margin: auto;
    width: 18px;
    height: 18px;
    fill: #fff !important;
    path {
      fill: #fff !important;
      g {
        fill: #fff !important;
      }
    }
  }

  .saved-search-terms {
    margin: 1em auto;
    background: #fff;
    border-radius: 10px;
    width: 70%;
    ul,
    li {
      list-style: none;
    }
    .saved-term-span {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      padding: 0.75em;
    }
    li {
      font-size: 0.85rem;
      cursor: pointer;
      display: grid;
      grid-template-columns: auto 30px;
      min-width: 250px;
      width: 100%;
      overflow: hidden;
      svg {
        width: 10px;
        height: 10px;
        fill: rgba(0, 0, 0, 0.7) !important;
        margin: auto;
        path {
          fill: rgba(0, 0, 0, 0.7) !important;
          g {
            fill: rgba(0, 0, 0, 0.7) !important;
          }
        }
      }
    }
  }
  .hover-grid {
    transition: all 0.3s ease-in-out;
    &:hover {
      > li {
        color: #000 !important;
      }
      background: RGBA(159, 162, 180, 0.125);
      border-radius: 10px;
      font-weight: 600;
    }
  }
  @media only screen and (max-width: 768px) {
    .search-dropdown-elements,
    .saved-search-terms {
      width: 90%;
    }
  }
`;
