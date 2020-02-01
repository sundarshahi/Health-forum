import React from 'react';
import { connect } from 'react-redux';

import TopicsList from './TopicsList'
import getTopics from '../../redux/actions/topics';


class TopicsContainer extends React.Component {
  componentWillMount() {
    this.props.getTopics();
  }

  render() {
    return <TopicsList topics={this.props.topics}/>;
  }
}

const mapStateToProps = state => ({
  topics: state.topics
});

const mapDispatchToProps = dispatch => ({
  getTopics: () => {
    dispatch(getTopics())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicsContainer);
