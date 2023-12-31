import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import Main from './Main'
import Signup from './Signup';
import Login from './Login';
import ProjectDash from './projectDash/ProjectDash';

// react routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: '/project-dash',
    element: <ProjectDash/>
  }
])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
