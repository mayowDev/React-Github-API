import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";
import PropTypes from "prop-types";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  // creating Textstate using useState
  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();

    if (text === "") {
      alertContext.showAlert("Please search something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users..'
          value={text}
          onChange={onChange}
        ></input>
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        ></input>
      </form>

      {/* Clear button and it's condition on when to appear */}

      {githubContext.users.length > 0 && (
        <button
          className='btn btn-block light'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  // clearUsers: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
