import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chats from './components/chats/Chats';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    
     {/* <AuthProvider> */}
     <Routes>
     {/* <Route path='/chats' element={}></Route> */}
     <Route path='/chats' element={<Chats></Chats>}></Route>
      <Route path='/' element={<Login></Login>}></Route>
    </Routes>
     {/* </AuthProvider> */}
    
    </BrowserRouter>
    </div>
  );
}

export default App;
