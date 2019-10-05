import React, { useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import UserItem from "./UserItem";
import Spinner from "../Layout/Spinner";

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userstyle}>
        {users.map(qof => (
          <UserItem key={qof.id} myqof={qof} />
        ))}
      </div>
    );
  }
};

const userstyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
};

export default Users;
