import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from './pages/Feed'
import Login from './pages/Login'
import MyAccount from './pages/MyAccount'
import Friends from './pages/Friends'
import SingUp from './pages/SingUp'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />} ></Route>
        <Route exact path='/feed' element={<Feed />}></Route>
        <Route exact path='/myAccount' element={<MyAccount />}></Route>
        <Route exact path='/friends' element={<Friends />}></Route>
        <Route exact path='/singup' element={<SingUp />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
