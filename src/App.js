import './App.css';
import Header from '../src/Share/Header/Header';
import Footer from '../src/Share/Footer/Footer';
import Home from '../src/Pages/Home/Home'
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import CarDetails from './Pages/CarDetails/CarDetails';
import CarAddForm from './Pages/CarAddForm/CarAddForm';
import SignUp from './Pages/Login/SignUp/SignUp';
import Blog from './Pages/Blog/Blog';
import NotFound from './Pages/NotFound/NotFound';
import RequireAuth from './Share/RequireAuth/RequireAuth';
import UpdateCar from './Pages/Home/UpdateCar/UpdateCar';

function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/signup' element={<SignUp/>}></Route>
       <Route path='/cars/:carId' element={<CarDetails/>}></Route>
       <Route path='/updateCar/:updateCarid' element={<UpdateCar/>}></Route>
       <Route path='/caraddform' element={<RequireAuth>
       {<CarAddForm/>}
       </RequireAuth>}></Route>
       <Route path='/blog' element={<Blog></Blog>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>

     </Routes>
        
     
      <Footer></Footer>
    </div>
  );
}

export default App;
