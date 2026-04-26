import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home.jsx";
import Teacherr from "./Components/Teacher/Teacherr.jsx";
import Students from "./Components/Students/Studentsliveclase.jsx"
import Studentss from "./Components/Students/Studentss.jsx";
import About from "./Components/About/About.jsx"
import Teacherclasses from "./Components/Teacher/Teacherclasses";
import Login from "./Components/Auth/Login.jsx";
import Signup from "./Components/Auth/Signup.jsx";
import Service from "./Components/Service/Services.jsx"
import Footer from './Components/Footer/Footer.jsx'

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
           <Route path='/services' element={<Service/>}/>
          <Route path='/students-45days' element={<Students/>}/>
           <Route path='/students-3months' element={<Studentss/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>}/>


           





      </Routes>
      <Footer/>

    </BrowserRouter>
  );
}