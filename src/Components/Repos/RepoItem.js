import React from "react";

const RepoItem = ({ repop }) => {
  return (
    <div className='card'>
      <h3>
        <a href={repop.html_url} target='_blank' rel='noopener noreferrer'>
          {repop.name}
        </a>
      </h3>
    </div>
  );
};

export default RepoItem;
