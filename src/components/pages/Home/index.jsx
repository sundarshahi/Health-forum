import React, { useEffect ,useCallback} from 'react';
import { shallowEqual,useDispatch,useSelector } from 'react-redux'

import Loader from '../../Loader';
import HomeThreads from './HomeThreads';
import {getThreads} from '../../../redux/actions/threads';


function HomeContainer (props) {

  const {threadsData,loading} = useSelector(state => ({
    threadsData: state.threads,
    loading: state.threads.loading,
  }), shallowEqual);
  
  const dispatch = useDispatch()
  
  const fetchThreads= useCallback((page) => {
        dispatch(getThreads(page))
      }, [dispatch])

  useEffect(() => {
    fetchThreads()
  }, [fetchThreads]);

  const getPageCount = (total, perPage) => {
    return Math.ceil(total / perPage);
  }

 const handlePageChange = (page) => {
  fetchThreads(page.selected + 1);
  }
    return (
     <div>
        {
          !loading &&
          <HomeThreads
            threads={threadsData.data}
            handlePageChange={handlePageChange}
            pageCount={getPageCount(threadsData.total, threadsData.per_page)}
            currentPage={threadsData.current_page - 1}
          />
        }
        {
          loading &&
         <Loader width={"91px"} height={"93px"}/>
        }
     </div>
    );
  }
export default HomeContainer;
