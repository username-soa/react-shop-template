const H2CartVariants = {
  hidden: { opacity: 0, y: "100px" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 1, type: "Inertia" },
  },
  exit: {
    opacity: 0,
    y: "-100px",
    transition: { duration: 0.5, type: "Inertia" },
  },
};

const SigninVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, type: "Inertia" },
  },
  exit: { opacity: 0, transition: { duration: 0.5, type: "Inertia" } },
};

const menuNavigationCategories = {
  hidden: { opacity: 0, y: "100px" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5, type: "Inertia" },
  },
  exit: {
    opacity: 0,
    transition: { type: "Inertia" },
  },
};

const menuContainerVariants = {
  hidden: { opacity: 0, x: "-100vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "Inertia" },
  },
  exit: {
    opacity: 0,
    x: "100vw",
    transition: { type: "Inertia" },
  },
};

const searchHistory = {
  hidden: { opacity: 0, y: "100px" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "Inertia" },
  },
  exit: {
    opacity: 0,
    y: "-100px",
    transition: { type: "Inertia" },
  },
};

const popUpCOntainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { type: "Inertia" },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};

const userCommandePopupVariants = {
  hidden: { opacity: 0, y: "100px" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "Inertia" },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};

const userCommandePopupTopVariants = {
  hidden: { opacity: 0, y: "100px" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "Inertia", delay: 0.2 },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};

const userCommandePopupContentVariants = {
  hidden: { opacity: 0, y: "100px" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "Inertia", delay: 0.4 },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};

const userCommandePopupBottomVariants = {
  hidden: { opacity: 0, y: "100px" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "Inertia", delay: 0.7 },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};

const NoItemsFoundVariants = {
  hidden: { opacity: 0, y: "100px" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "Inertia", delay: 0.7 },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};

export {
  H2CartVariants,
  SigninVariants,
  menuNavigationCategories,
  menuContainerVariants,
  searchHistory,
  popUpCOntainerVariants,
  userCommandePopupVariants,
  userCommandePopupTopVariants,
  userCommandePopupContentVariants,
  userCommandePopupBottomVariants,
  NoItemsFoundVariants,
};
