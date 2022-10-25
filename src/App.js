import Home from './pages/Home';
import CheckingView from './pages/CheckingView';
import CreateCheckingView from './pages/CreateCheckingView';
import LoginView from './pages/LoginView';
import NavbarLayout from './components/NavbarLayout';
import SignUpView from './pages/SignUpView';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import './CSS/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
        <Router>
          <header className="App-header">
            <Routes>
              <Route element={<NavbarLayout/>}>
                <Route path="/home" element={<Home />}/>
                <Route path="/viewChecking" element={<CheckingView />}/>
                <Route path="/createChecking" element={<CreateCheckingView />}/>
              </Route>
              <Route path="/" element={<LoginView />}/>
              <Route path="/user/register" element={<SignUpView />}/>
            </Routes>
          </header>
        </Router>
    </div>
  );
}

export default App;