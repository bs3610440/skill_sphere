import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home.jsx";
import Teacherr from "./Components/Teacher/Teacherr.jsx";
import Liveclasses from "./Components/Live/Liveclasses.jsx";
import Students from "./Components/Students/Studentsliveclase.jsx"
import Studentss from "./Components/Students/Studentss.jsx";
import learning from "./Components/Learning/Learning.jsx"
import Teacherclasses from "./Components/Teacher/Teacherclasses";
import Learning from "./Components/Learning/Learning.jsx";
import Login from "./Components/Auth/Login.jsx";
import Signup from "./Components/Auth/Signup.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
       <Route path='/' element={<Home/>}/>

        <Route
          path="/teachers-45days"
          element={<Teacherclasses />}
        />
         <Route path='/teachers-3months' element={<Teacherr/>}/>
           <Route path='/live' element={<Liveclasses/>}/>
          <Route path='/students-45days' element={<Students/>}/>
           <Route path='/students-3months' element={<Studentss/>}/>
             <Route path='/learning' element={<Learning/>}/>
             <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>}/>


           






      </Routes>
    </BrowserRouter>
  );
}