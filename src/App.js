
import './App.css';
import Register from './Components/Register';
import UserList from './Components/UserList';
import Nav from './Components/Nav';
import AddTask from './Components/AddTask';
import PrivateComponent from './Components/PrivateComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return(
    <div className='App'>
       <BrowserRouter>
      <Nav />
      <Routes>
      <Route element={<PrivateComponent />}>
        <Route path="/" element={<h1>Welcome</h1>} />
          <Route path="/register" element={<Register />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/addtask" element={<AddTask />} />
      </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
