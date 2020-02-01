import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeThreads from './HomeThreads';
import loadingGif from '../../../loading.gif';
import {getThreads} from '../../../redux/actions/threads';

class HomeContainer extends Component {
  componentWillMount() {
    this.props.getThreads();
  }
  getPageCount = (total, perPage) => {
    return Math.ceil(total / perPage);
  }

  handlePageChange = (page) => {
    this.props.getThreads(page.selected + 1);
  }

  render() {
    return (
     <div>
        {
          !this.props.loading &&
          <HomeThreads
            threads={this.props.threadsData.data}
            handlePageChange={this.handlePageChange}
            pageCount={this.getPageCount(this.props.threadsData.total, this.props.threadsData.per_page)}
            currentPage={this.props.threadsData.current_page - 1}
          />
        }
        {
          this.props.loading &&
          <div className="text-center">
            <img src={loadingGif} alt="loading" width="95px" height="92px" className="img"/>
          </div>
        }
     </div>
    );
  }
}

const mapStateToProps = (state) => ({
  threadsData: state.threads,
  loading: state.threads.loading
}) 

const mapDispatchToProps = (dispatch) => ({
  getThreads: (page) => {
    dispatch(getThreads(page))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
