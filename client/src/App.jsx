import {
  Routes,
  Route,
  Link
} from "react-router-dom"
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ProjectDash from "./components/projectDash/ProjectDash";
import ProjectOverview from "./pages/projectOverview/ProjectOverview";
import Sidenav from "./components/common/Sidenav";
import StudentDash from "./components/studentDash/StudentDash";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/navbar" element={<Sidenav/>}></Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>

      <Route path="/student-dash" element={<StudentDash/>}/>
      <Route path="/project-dash" element={<ProjectDash/>}>
        
        <Route index element={<ProjectOverview />} />
        
        </Route>
     
    </Routes>
  );
}

export default App;
