import React from 'react';
import Gravatar from 'react-gravatar';

const Reply = ({ reply }) => (
  <div className="card mb-3">
    <div className="card-header">
      <Gravatar
        email={reply.owner.email}
        className="mr-3 rounded-circle"
        width="30px"
        height="30px"
      />
      <span className="text-sm text-muted">
        {reply.owner.name}, <b> 1 hrs ago</b>
      </span>
    </div>
    <div className="card-body">
      <p className="text-center">{reply.body}</p>
    </div>
  </div>
);

export default Reply;
