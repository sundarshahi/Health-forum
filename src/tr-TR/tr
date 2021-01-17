import React from 'react';
import ReactPaginate from 'react-paginate';

import Thread from '../../../Thread';

const HomeThreads = ({ threads, handlePageChange, pageCount, currentPage }) => (
  <>
    {threads?.map((thread) => (
      <Thread thread={thread} key={thread.id} />
    ))}
    <div className="row justify-content-center my-5">
      <ReactPaginate
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        disabledClassName="disabled"
        breakClassName="page-link"
        onPageChange={handlePageChange}
        pageCount={pageCount}
        forcePage={currentPage}
      />
    </div>
  </>
);

export default HomeThreads;
