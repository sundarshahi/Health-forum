import React from 'react';
import { useSelector } from 'react-redux';

import ThreadForm from './ThreadForm';

function CreateThread() {
  const { authenticated } = useSelector(() => ({
    authenticated: true,
  }));

  return <>{authenticated && <ThreadForm />}</>;
}

export default CreateThread;
