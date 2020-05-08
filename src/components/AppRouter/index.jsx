import React from 'react';
import { Route } from 'react-router-dom';

import {Home,Login,Thread,Register} from '../pages';

const AppRouter = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={Login} />    
    <Route path="/register" component={Register} />  
    <Route path="/thread/:id" component={Thread}  />
  </>
);

export default AppRouter;
