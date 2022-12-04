import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userAddresses, setUserAddresses] = useState([]);

  const updateInBrowser = (data) => {
    setUser(data);
    localStorage.setItem("ec_user_info", JSON.stringify(data));
  };
  const saveUserToBrowser = (data) => {
    setUser(data);
    localStorage.setItem("ec_user_info", JSON.stringify(data));
  };
  const getUserFromBrowser = (data) => {
    const item = JSON.parse(localStorage.getItem("ec_user_info"));
    if (data.email === item.email && data.pwd === item.pwd) {
      return 1;
    } else {
      return -1;
    }
  };
  const deleteUserFromBrowser = () => {
    localStorage.removeItem("ec_user_info");
    localStorage.removeItem("ec_shopify_token");
    localStorage.removeItem("ec_user_addresses");
    localStorage.removeItem("ec_shopify_accessToken");
    setUser({});
    setUserAddresses([]);
  };

  const addAddressToBrowser = (data) => {
    const tempArr = [...userAddresses];
    tempArr.push(data);
    localStorage.setItem("ec_user_addresses", JSON.stringify(tempArr));
    setUserAddresses(tempArr);
  };
  const updateAddressInBrowser = (data) => {
    const tempArr = [...userAddresses];
    const objIndex = tempArr.findIndex((obj) => obj.name == data.name);
    tempArr[objIndex] = data;
    localStorage.setItem("ec_user_addresses", JSON.stringify(tempArr));
    setUserAddresses(tempArr);
  };
  const deleteAddressFromBrowser = (data) => {
    let tempArr = [];
    tempArr = userAddresses.filter((i) => {
      return i.name !== data.name;
    });
    localStorage.setItem("ec_user_addresses", JSON.stringify(tempArr));
    setUserAddresses(tempArr);
  };

  const authContext = {
    user,
    setUser,
    userAddresses,
    updateInBrowser,
    setUserAddresses,
    saveUserToBrowser,
    getUserFromBrowser,
    addAddressToBrowser,
    deleteUserFromBrowser,
    updateAddressInBrowser,
    deleteAddressFromBrowser,
  };

  useEffect(() => {
    if (localStorage.getItem("ec_user_info") !== null) {
      const userItem = JSON.parse(localStorage.getItem("ec_user_info"));
      setUser(userItem);
    } else {
      setUser(null);
    }
    if (localStorage.getItem("ec_user_addresses") !== null) {
      const addressItems = JSON.parse(
        localStorage.getItem("ec_user_addresses")
      );
      setUserAddresses(addressItems);
    } else {
      setUserAddresses([]);
    }
  }, []);

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;
