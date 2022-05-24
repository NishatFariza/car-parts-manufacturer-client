
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './Pages/Auth/LogIn/LogIn';
import Register from './Pages/Auth/Register/Register';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/HomePage/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';


function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/login' element={<LogIn></LogIn>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
