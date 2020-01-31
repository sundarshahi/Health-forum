import React from 'react';

import SideNav from './components/SideNav';
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';

class App extends React.Component {
  render() {
    const isNotAuthPath = this.props.history.location.pathname !== '/register' && this.props.history.location.pathname !== '/login';
    return (
      <>
        <Navbar />
        <div className="my-4">
          <div className="container">
            <div className="row justify-content-center">
              {
                 isNotAuthPath &&
                <div className="col-md-4">
                  <button className="btn btn-outline-dark my-3 form-control">Start thread</button>
                  <SideNav/>
                </div>
              }
              <div className="col-md-8">
                <AppRouter />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
