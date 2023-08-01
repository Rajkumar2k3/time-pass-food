import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Menu from './Components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="Menu"  element={<Menu/>}/>
      </Routes>
      </BrowserRouter>      
    </div>
  );
}
   
export default App;
