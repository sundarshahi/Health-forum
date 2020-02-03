import React, { Fragment } from 'react';
import {connect} from 'react-redux';

import Loader from '../../Loader';
import SingleThread from './SingleThread';
import {getThread} from '../../../redux/actions/threads';
import {getReplies} from '../../../redux/actions/replies';

class ThreadContainer extends React.Component{
    componentWillMount() {
        const { id } = this.props.match.params
        this.props.getThread(id)
        this.props.getReplies(id)
      }

      getPageCount = (total, perPage) => {
        return Math.ceil(total / perPage);
      }
    
      handlePageChange = (page) => {
        const { id } = this.props.match.params
        this.props.getReplies(id, page.selected + 1)
      }
      
    render(){
        return(
            <Fragment>
                {
                    this.props.loading?
                    <Loader/>
                    :
                    <SingleThread 
                        thread={this.props.thread}
                        replies={this.props.replies}
                        getPageCount={this.getPageCount}
                        handlePageChange={this.handlePageChange}
                    />
                }
            </Fragment>
        )
    }
}
const mapStateToProps = (state) =>({
    thread: state.thread.data,
    loading: state.thread.loading,
    loadingReplies: state.thread.loadingReplies,
    replies: state.thread.replies
})

const mapDispatchToProps = (dispatch) => ({
    getThread: (id) => {
      dispatch(getThread(id))
    },
    getReplies: (id,page) => {
        dispatch(getReplies(id,page))
      }
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(ThreadContainer)