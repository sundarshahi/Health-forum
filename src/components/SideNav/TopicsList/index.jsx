import React from 'react'

const TopicsList = ({ topics }) => (
  <ul className="list-group">
    {topics.map(topic => <li key={topic.id} className="list-group-item">{topic.name}</li>)}
  </ul>
);
export default TopicsList