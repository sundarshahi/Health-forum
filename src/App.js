import React from 'react';

import {
  Navbar,
  SideNav,
  CreateThread,
  ThreadButton,
  AppRouter,
} from './components';

function App(props) {
  const {
    history: { location },
  } = props;
  const isNotAuthPath =
    location.pathname !== '/register' && location.pathname !== '/login';
  return (
    <>
      <Navbar />
      <CreateThread />
      <div className="my-4">
        <div className="container">
          <div className="row justify-content-center">
            {isNotAuthPath && (
              <div className="col-md-4">
                <ThreadButton />
                <SideNav />
              </div>
            )}
            <div className="col-md-8">
              <AppRouter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
