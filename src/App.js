import './App.css';
import Header from '../src/Share/Header/Header';
import Footer from '../src/Share/Footer/Footer';
import Home from '../src/Pages/Home/Home'
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import CarDetails from './Pages/CarDetails/CarDetails';
import CarAddForm from './Pages/CarAddForm/CarAddForm';

function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/carDetails/:id' element={<CarDetails/>}></Route>
       <Route path='/caraddform' element={<CarAddForm/>}></Route>

     </Routes>
        
     
      <Footer></Footer>
    </div>
  );
}

export default App;
