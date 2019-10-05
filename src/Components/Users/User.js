import React, { useEffect, useContext, Fragment } from "react";
import Spinner from "../Layout/Spinner";
import Repos from "../Repos/Repos";
import GithubContext from "../../context/github/githubContext";
import { Link } from "react-router-dom";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { loading, repos, getUser, getUserRepos, user } = githubContext;
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  // pulling out the data from the userp prop
  const {
    name,
    login,
    avatar_url,
    location,
    bio,
    blog,
    company,
    followers,
    following,
    html_url,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      {/*  Back to serach button and hireable status */}
      <Link to='/' className='btn btn-light'>
        Back to Search
      </Link>
      Hireable:{""}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className='card grid-2'>
        {/* User profile */}
        <div className='all-center'>
          <img
            src={avatar_url}
            className='round-img'
            alt=''
            style={{ width: "200px" }}
          />

          <h1>{name}</h1>
          <p>Location:{location}</p>
        </div>

        {/* User Account info */}
        <div>
          {bio && (
            <Fragment>
              <h3>Biography</h3>
              <p>{bio}</p>
            </Fragment>
          )}

          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong> Username : </strong>
                  {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong> Company : </strong>
                  {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong> Website : </strong>
                  <a href={blog} target='_blank' rel='noopener noreferrer'>
                    {blog}
                  </a>
                </Fragment>
              )}
            </li>
          </ul>
          <br></br>
          <a
            href={html_url}
            className='btn btn-dark'
            target='_blank'
            rel='noopener noreferrer'
          >
            Go to Gihub Profile
          </a>
        </div>
      </div>
      {/* ------- Badges/Buttons for follwers -------- */}
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers:{followers}</div>
        <div className='badge badge-success'>Following:{following}</div>
        <div className='badge badge-light'>Public repos:{public_repos}</div>
        <div className='badge badge-dark'>Public Gists:{public_gists}</div>
      </div>
      <Repos reposp={repos} />
    </Fragment>
  );
};

export default User;
