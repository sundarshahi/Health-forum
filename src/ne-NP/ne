import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ThreadButton = () => {
  const { authenticated } = useSelector(() => ({
    authenticated: true,
  }));
  return (
    <>
      {authenticated && (
        <button
          type="button"
          className="btn btn-outline-dark my-3 form-control"
          data-toggle="modal"
          data-target="#createThread"
        >
          Start thread
        </button>
      )}
      {!authenticated && (
        <Link to="/login" className="btn btn-info my-3 form-control">
          Login to start a thread
        </Link>
      )}
    </>
  );
};

export default ThreadButton;
