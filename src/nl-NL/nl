import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import Loader from '../../Loader';
import SingleThread from './SingleThread';
import { requestThread } from '../../../redux/actions/threads';
import { requestReplies } from '../../../redux/actions/replies';

function ThreadContainer(props) {
  const { thread, loading, replies } = useSelector(
    (state) => ({
      thread: state.thread.data,
      loading: state.thread.loading,
      loadingReplies: state.thread.loadingReplies,
      replies: state.thread.replies,
    }),
    shallowEqual,
  );

  const dispatch = useDispatch();

  useEffect((page) => {
    const { id } = props.match.params;
    dispatch(requestThread(id));
    dispatch(requestReplies(id, page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPageCount = (total, perPage) => {
    return Math.ceil(total / perPage);
  };

  const handlePageChange = (page) => {
    const { id } = props.match.params;
    dispatch(requestReplies(id, page.selected + 1));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <SingleThread
          thread={thread}
          replies={replies}
          getPageCount={getPageCount}
          handlePageChange={handlePageChange}
        />
      )}
    </>
  );
}

export default ThreadContainer;
