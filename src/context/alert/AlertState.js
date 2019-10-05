import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";

// ====> import our types
import { SET_ALERT, REMOVE_ALERT } from "../types";

// ====> CREATING  OUR Component
const AlertState = props => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // alert from app.js

  const showAlert = (msg, type) => {
    dispatch({ type: SET_ALERT, payload: { msg, type } });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
  };

  // ============ Wrapping our application with the provider =============
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert: state,
        showAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
