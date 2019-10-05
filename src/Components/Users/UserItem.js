import React from "react";
// import propTypes from "prop-types";
import { Link } from "react-router-dom";

function UserItem(props) {
  const { avatar_url, login } = props.myqof;
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: "50px" }}
      ></img>
      <h3>{login}</h3>
      <div>
        <Link
          to={`/user/${login}`}
          className='btn-dark btn-sm my-1'
          target='_blank rel="noopener noreferrer'
        >
          More
        </Link>
      </div>
    </div>
  );
}

// UserItem.propTypes = {
//   qof: propTypes.object.isRequired
// }; use this for lesson 4

export default UserItem;
