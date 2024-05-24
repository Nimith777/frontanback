import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import View from './components/View';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
       <Route path="/add" element={<Add data={{ename:"",eage:"",eposition:"",esalary:""}}method="post"/>} />
       <Route path="/view" element={<View />} />
     </Routes>
    </div>
  );
}

export default App;
