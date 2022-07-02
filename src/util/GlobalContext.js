import React from "react";

const defaultVal = {
  arrUsers: [],
};

const GlobalContext = React.createContext(defaultVal);
export default GlobalContext;
