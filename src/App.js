import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skill } from './components/Skill';
import { Project } from './components/Project';
import { Contact } from './components/Contact';
import { Footer } from "./components/Footer";
// // import  Projectss  from './components/Projectss'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useEffect, useState } from 'react';
// import Test from './components/Test';


function App() {
  // const [counter, setCounter] = useState(0)

  // useEffect(() => {
  //   console.log(counter)
  //   // setCounter(counter + 1)
  // }, [counter]) 
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <Skill />
     <Project/>
     <Contact/>
     <Footer/>
     {/* <Test  /> */}
    {/* <Projectss /> */}
     {/* <button onClick={() => setCounter(counter + 1)}>Add Counter</button> */}
    </div>
  );
}

export default App;
