import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import Main from './Main'
import Signup from './Signup';
import Login from './Login';
import ProjectDash from './projectDash/ProjectDash';
import StudentDash from './studentDash/StudentDash';

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
  },
  {
    path: '/student-dash',
    element: <StudentDash/>
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
