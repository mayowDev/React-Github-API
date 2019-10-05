import React, { useReducer } from "react";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import axios from "axios";
// ====> import our types
import {
  SEARCH_USERS,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_LOADING
} from "../types";

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}
// ====> CREATING  OUR Component
const GithubState = props => {
  //create our global state for  github
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  // ===>dispatching type back to our reducer
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // ======================== Actions =================================

  // searhc users from app.js
  const searchUsers = async text => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}
      &client_secret=${githubClientSecret}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  };

  // get single user
  const getUser = async username => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}
      &client_secret=${githubClientSecret}`
    );
    dispatch({ type: GET_USER, payload: res.data });
  };

  // get repos
  const getUserRepos = async username => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc
      &client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({ type: GET_REPOS, payload: res.data });
  };

  // Clear Users from app.js
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set Loading

  const setLoading = () => dispatch({ type: SET_LOADING });

  // ============ Wrapping our application with the provider =============
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
        repos: state.repos,
        loading: state.loading
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
