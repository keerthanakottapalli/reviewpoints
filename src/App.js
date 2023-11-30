import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import RegistrationForm from './Registration';
import LoginForm from './Login';
function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
        <Route path='/registration' element={< RegistrationForm/>} />
        <Route path='/loginform' element={< LoginForm/>} />
        </Routes>
       </Router>
    </div>
  );
}

export default App;
