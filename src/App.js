import './App.css';
import Sidebar from './components/Sidebar.jsx';
import Category from './pages/Category.jsx';
import Offers from './pages/Offers.jsx';
import Product from './pages/Product.jsx';
import Brand from './pages/Brand.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
   <Router>
   <Sidebar>
   <Routes>
   <Route path="/"element={<Offers/>}/>
   <Route path="/category"element={<Category/>}/>
   <Route path="/offers"element={<Offers/>}/>
   <Route path="/product"element={<Product/>}/>
   <Route path="/brand"element={<Brand/>}/>
   </Routes>
   </Sidebar>
   </Router>
  );
};

export default App;
  