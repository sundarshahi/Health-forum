import React from 'react';

import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import AppRouter from './components/AppRouter';
import CreateThread from './components/CreateThread'
import ThreadButton from './components/CreateThread/ThreadButton'

class App extends React.Component {
  render() {
    const isNotAuthPath = this.props.history.location.pathname !== '/register' && this.props.history.location.pathname !== '/login';
    return (
      <>
        <Navbar />
        <CreateThread />
        <div className="my-4">
          <div className="container">
            <div className="row justify-content-center">
              {
                 isNotAuthPath &&
                <div className="col-md-4">
                 <ThreadButton />
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
