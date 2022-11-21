import React, { createContext, useState, useEffect } from "react";

const ClientContext = createContext({});

export const ClientProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [client, setClient] = useState({});
  const [checkoutEC, setCheckout] = useState({});
  const [isLoading, setIsloading] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  let mounted = true;

  const addToCart = (item, qte, size, color) => {
    const newItem = item;
    newItem.selectedSize = size;
    newItem.selectedColor = color;
    const newArr = [...cartItems];
    const itemExistsIndex = newArr.findIndex((i) => item.slug === i?.slug);
    if (itemExistsIndex !== -1) {
      newItem.qte = qte + newArr[itemExistsIndex]?.qte;
      newArr.splice(itemExistsIndex, 1, newItem);
    } else if (itemExistsIndex === -1) {
      newItem.qte = qte;
      newArr.push(newItem);
    }
    setCartItems(newArr);
  };

  const deleteProduct = async (id) => {
    const tempArr = [...cartItems];
    const newArr = tempArr.filter((i) => {
      return i.slug !== id;
    });
    setCartItems(newArr);
  };

  const updateProductQte = (uid, value) => {
    const tempArr = [...cartItems];
    for (let index = 0; index < tempArr.length; index++) {
      if (tempArr[index].slug === uid) {
        tempArr[index].qte = value;
        break;
      }
    }
    setCartItems(tempArr);
  };

  const clientContext = {
    client,
    isOpen,
    cartItems,
    isLoading,
    setIsOpen,
    addToCart,
    setClient,
    checkoutEC,
    deleteProduct,
    updateProductQte,
  };

  useEffect(() => {
    if (mounted && cartItems?.length > 0) {
      localStorage.setItem("ec_client_cart", JSON.stringify(cartItems));
    }
    return () => {
      mounted = false;
    };
  }, [cartItems]);

  useEffect(() => {
    if (
      localStorage.getItem("ec_client_cart") !== null &&
      cartItems?.length === 0
    ) {
      try {
        const result = JSON.parse(localStorage.getItem("ec_client_cart"));
        setCartItems(result);
      } catch (err) {
        console.log(err.message);
      }
    }
  }, []);

  useEffect(() => {
    if (mounted && client) {
      // create checkout

      // if (localStorage.getItem("ec-shopify-checkout-id") === null) {
      //   createCheckout();
      // } else if (localStorage.getItem("ec-shopify-checkout-id") !== null) {
      //   fetchCheckout();
      // }
      // const brandArry = [];
      // const brandNamesArr = [
      //   {
      //     name: "Tous",
      //     value: "all",
      //   },
      // ];
      // const categorieNamesArr = [
      //   {
      //     name: "Tous",
      //     value: "all",
      //   },
      // ];
      const newArrivales = [];
      const homeOffers = [];
      const theRest = [];
      // client?.collection?.fetchAllWithProducts({ first: 100 }).then((col) => {
      //   setIsloading(true);
      //   col.map((item) => {
      //     if (item?.title?.toLowerCase().includes("dayoffre")) {
      //       try {
      //         const j = JSON.parse(item?.description);
      //         const id = item?.products[0];
      //         setDayoffrepID(id);
      //         setDayOffre({ ...dayOffre, item: item, description: j });
      //       } catch (err) {
      //         console.log(err);
      //       }
      //     } else if (item?.title?.toLowerCase().includes("brand")) {
      //       brandNamesArr.push({
      //         name: item?.title.replace("-brand", ""),
      //         value: item?.title.replace("-brand", ""),
      //       });
      //       brandArry.push(item);
      //     } else if (item?.title?.toLowerCase().includes("newarrivales")) {
      //       newArrivales.push(item);
      //     } else if (item?.title?.toLowerCase().includes("homeoffer")) {
      //       homeOffers.push(item);
      //     } else if (!item?.title?.toLowerCase().includes("-")) {
      //       theRest.push(item);
      //       categorieNamesArr.push({
      //         name: item?.title,
      //         value: item?.title,
      //       });
      //     }
      //   });
      //   setCategorieNames(categorieNamesArr);
      //   setBrandNames(brandNamesArr);
      //   setBrands(brandArry);
      //   setCollections(theRest);
      //   setHomeoffres(homeOffers);
      //   setNewproducts(newArrivales);
      //   setIsloading(false);
      // });
    }

    //   if (
    //     localStorage.getItem("ec_client_cart") !== null &&
    //     cartItems?.length === 0
    //   ) {
    //     try {
    //       const result = JSON.parse(localStorage.getItem("ec_client_cart"));
    //       setCartitems(result);
    //     } catch (err) {
    //       console.log(err.message);
    //     }
    //   }
    return () => {
      mounted = false;
    };
  }, [client]);

  return (
    <ClientContext.Provider value={clientContext}>
      {children}
    </ClientContext.Provider>
  );
};

export const ClientConsumer = ClientContext.Consumer;

export default ClientContext;
