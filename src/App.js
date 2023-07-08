
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './Auth/Login';
import SignInForm from './Auth/SignUp';

function App() {
  return (
    <div className="App">

<Router>
     {/* <LoginForm></LoginForm> */}
     {/* <SignInForm></SignInForm> */}

     <Routes>
              <Route exact path='/' element={<LoginForm/>}></Route>
              <Route exact path='/signUp' element={<SignInForm/>}></Route>
              
            </Routes>
              </Router>
    </div>
  );
}

export default App;
