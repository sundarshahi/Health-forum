/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';

const HomeThreads = () => (
  <Fragment>
    <div className="card mb-3">
      <div className="card-header">
        <img src="http://i.pravatar.cc/310" className="mr-3 rounded-circle" width="30px" height="30px" alt="" />
        <span className="text-sm text-muted">Sundar, <b>3 hrs ago</b></span>
        <a href="" className="btn btn-outline-dark btn-xs float-right">view thread</a>
      </div>
      <div className="card-body">
        <h4 className="text-center">Lorem ipsum</h4>
        <p className="text-center">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium...
            </p>
      </div>
      <div className="card-footer text-muted">
        <span>6 replies</span>
        <a href="" className="btn btn-danger float-right btn-xs">Virus</a>
      </div>
    </div>
    <div className="card mb-3">
      <div className="card-header">
        <img src="http://i.pravatar.cc/300" className="mr-3 rounded-circle" width="30px" height="30px" alt="" />
        <span className="text-sm text-muted">Sundar, <b>3 hrs ago</b></span>
        <a href="" className="btn btn-outline-dark btn-xs float-right">view thread</a>
      </div>
      <div className="card-body">
        <h4 className="text-center">Lorem ipsum</h4>
        <p className="text-center">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium...
            </p>
      </div>
      <div className="card-footer text-muted">
        <span>6 replies</span>
        <a href="" className="btn btn-danger float-right btn-xs">Infection</a>
      </div>
    </div>
    <div className="row justify-content-center my-5">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="">1</a></li>
          <li class="page-item"><a class="page-link" href="">2</a></li>
          <li class="page-item"><a class="page-link" href="">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
               <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </Fragment>
);

export default HomeThreads;
