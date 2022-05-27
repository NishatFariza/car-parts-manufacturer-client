
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './Pages/Auth/LogIn/LogIn';
import Register from './Pages/Auth/Register/Register';
import RequireAdmin from './Pages/Auth/RequireAdmin/RequireAdmin';
import RequireAuth from './Pages/Auth/RequireAuth/RequireAuth';
import Blogs from './Pages/Blogs/Blogs';
import AddProducts from './Pages/DashboardPage/AddProducts/AddProducts';
import AddReview from './Pages/DashboardPage/AddReview/AddReview';
import Dashboard from './Pages/DashboardPage/Dashboard/Dashboard';
import MakeAdmin from './Pages/DashboardPage/MakeAdmin/MakeAdmin';
import ManageAllOrders from './Pages/DashboardPage/ManageAllOrders/ManageAllOrders';
import ManageProducts from './Pages/DashboardPage/ManageProducts/ManageProducts';
import MyOrder from './Pages/DashboardPage/MyOrder/MyOrder';
import MyProfile from './Pages/DashboardPage/MyProfile/MyProfile';
import Home from './Pages/HomePage/Home/Home';
import MyPortfolio from './Pages/MyPortfolioPage/MyPortfolio/MyPortfolio';
import Payment from './Pages/Payment/Payment';
import Purchase from './Pages/Purchase/Purchase';


import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';


function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/dashboard' element={
         <RequireAuth>
           <Dashboard></Dashboard>
         </RequireAuth>
       }>
         <Route path='addproducts' element={
           <RequireAdmin>
             <AddProducts></AddProducts>
           </RequireAdmin>
         }></Route>
         <Route path='addreview' element={<AddReview></AddReview>}></Route>
         <Route path='makeadmin' element={
           <RequireAdmin>
             <MakeAdmin></MakeAdmin>
           </RequireAdmin>
         }></Route>
         <Route path='manageallorders' element={
           <RequireAdmin>
             <ManageAllOrders></ManageAllOrders>
           </RequireAdmin>
         }></Route>
         <Route path='manageproducts' element={
           <RequireAdmin>
             <ManageProducts></ManageProducts>
           </RequireAdmin>
         }></Route>
         <Route path='myorder' element={<MyOrder></MyOrder>}></Route>
         <Route index element={<MyProfile></MyProfile>}></Route>
        

        
       </Route>
       <Route path='/login' element={<LogIn></LogIn>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
       <Route path='/purchase/:id' element={
         <RequireAuth>
           <Purchase></Purchase>
         </RequireAuth>
       }></Route>
       <Route path='/payment/:id' element={<Payment></Payment>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
     <Toaster/>
    </div>
  );
}

export default App;
