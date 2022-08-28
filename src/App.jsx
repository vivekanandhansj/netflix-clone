
import './app.scss';
 import Home from './pages/Home/Home';
import Register from './pages/register/Register';
 import Login from './pages/login/Login';
 import Watch from './pages/watch/Watch';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
 return(    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/watch" element={<Watch/>}/>
    
     
    
    </Routes>
  </BrowserRouter>)
}

export default App;
