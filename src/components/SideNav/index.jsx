import React from 'react';
import { connect } from 'react-redux';

import Loader from '../Loader';
import TopicsList from './TopicsList';
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
        <Loader/>
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
