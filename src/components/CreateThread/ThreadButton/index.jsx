import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const ThreadButton = ({ authenticated }) => ((
  <>
    {
      authenticated &&
      <button className="btn btn-outline-dark my-3 form-control" data-toggle="modal" data-target="#createThread">Start thread</button>
    }
    {
      !authenticated &&
      <Link to="/login" className="btn btn-info my-3 form-control">Login to start a thread</Link>
    }
  </>
))

export default connect(state => ({
  authenticated:  true //need to implement authentication after login register complete
}))(ThreadButton)