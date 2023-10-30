import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import StudentDetails from './pages/StudentDetails';
import Product from '../src/pages/Product'

function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Home/>}> </Route>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/student-details/:id/:name/:address' element={<StudentDetails/>}></Route>
      <Route exact path='/product' element={<Product/>}></Route>
     </Routes>
    </>
  );
}

export default App;
