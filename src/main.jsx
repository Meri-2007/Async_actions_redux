import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import './index.css';
import { Users } from './features/users/user.jsx';
import AddUser from './features/users/addUser.jsx';
import { store } from './features/store'; 
const routes = createBrowserRouter([
  { path: '/',
   element: <Users />
  },
  { path: '/add',
   element: <AddUser />
  }
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}> 
      <RouterProvider router={routes}>
      </RouterProvider>
    </Provider>
  </StrictMode>
);
