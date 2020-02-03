import React from 'react';
import {Link} from 'react-router-dom';
import Gravatar from 'react-gravatar';

const Thread =({thread})=>((
    <div className="card mb-3">
        <div className="card-header">
         <Gravatar email={thread.creator.email} className="mr-3 rounded-circle"width="30px" height="30px" alt="" />
          <span className="text-sm text-muted">{thread.creator.name}, <b>3 hrs ago</b></span>
          <Link to ={`/thread/${thread.id}`} className="btn btn-outline-dark btn-xs float-right">view thread</Link>
        </div>
        <div className="card-body">
          <h5 className="text-center">{thread.title}</h5>
        </div>
        <div className="card-footer text-muted">
          <span>{thread.replies_count} replies</span>
          <a href="##" className="btn btn-danger float-right btn-xs">{thread.channel.name}</a>
        </div>
      </div>
))

export default Thread