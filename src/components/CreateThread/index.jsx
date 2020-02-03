import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import ThreadForm from './ThreadForm'

class CreateThread extends React.Component {
  render() {
    return (
      <Fragment>
        {this.props.authenticated && <ThreadForm />}
      </Fragment>
    )
  }
}

export default connect(state => ({
  authenticated:  true
}))(CreateThread)