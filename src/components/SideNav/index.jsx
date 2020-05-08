import React, {useEffect} from 'react';
import { useDispatch,useSelector,shallowEqual } from 'react-redux';

import Loader from '../Loader';
import TopicsList from './TopicsList';
import getTopics from '../../redux/actions/topics';


function TopicsContainer () {

  const {topics,loading} = useSelector(state=>({
    topics: state.topics.data,
    loading:state.topics.loading
  }),shallowEqual)

  

  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getTopics())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

    
    return <div>
      {
        
        !loading &&
        <TopicsList topics={topics}/>
      }
      {
        loading &&
        <Loader/>
      }
    </div>;
  }


export default TopicsContainer;
