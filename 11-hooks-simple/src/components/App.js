import React, { useState } from 'react';

import ResourceList from './ResourceList/ResourceList';
import UserList from './UserList/UserList';


const App = () => {
  const [resource, setResource] = useState('posts');


  return(
    <div>
      <UserList />
      <button onClick={() => setResource('posts')}>
        Posts
      </button>
      <button onClick={() => setResource('todos')}>
        Todos
      </button>
      <ResourceList resource={resource} />
    </div>
  );
}

export default App;
