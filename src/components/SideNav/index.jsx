import React from 'react';
import { connect } from 'react-redux';

import TopicsList from './TopicsList'
import loadingGif from '../../loading.gif'
import getTopics from '../../redux/actions/topics';


class TopicsContainer extends React.Component {
  componentWillMount() {
    this.props.getTopics();
  }

  render() {
    
    return <div>
      {
        !this.props.loading &&
        <TopicsList topics={this.props.topics}/>
      }
      {
        this.props.loading &&
        <div className="text-center">
          <img src={loadingGif} alt="" width="40px" height="40px" className="img"/> 
        </div>
      }
    </div>;
  }
}

const mapStateToProps = state => ({
  topics: state.topics.data,
  loading:state.topics.loading
});

const mapDispatchToProps = dispatch => ({
  getTopics: () => {
    dispatch(getTopics())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicsContainer);
