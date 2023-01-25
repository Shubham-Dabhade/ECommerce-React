import './App.css';
import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login  from './pages/Login';
import Cart from './pages/Cart';
import Success from "./pages/Success";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state)=>state.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={!user?<Login/>:<Home />}/>
        <Route path="/products/:category" element={!user?<Login/>:<ProductList />}/>
        <Route path="/product/:id" element={!user?<Login/>:<Product />}/>
        <Route path="/cart" element={!user?<Login/>:<Cart />}/>
        <Route path="/success" element={!user?<Login/>:<Success />}/>
        <Route exact path="/login" element={user ? <Navigate to="/" /> : <Login />}/>
        <Route exact path="/register" element={user ? <Navigate to="/" /> : <Register />}/>
      </Routes>
    </Router>
  );
}

export default App;
