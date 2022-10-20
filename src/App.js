import Home from './pages/Home';
import ViewChecking from './pages/ViewChecking';
import CreateChecking from './pages/CreateChecking';
import LoginPage from './pages/LoginPage';
import NavbarLayout from './components/NavbarLayout';
import CreateUser from './pages/CreateUser';
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
                <Route path="/viewChecking" element={<ViewChecking />}/>
                <Route path="/createChecking" element={<CreateChecking />}/>
              </Route>
              <Route path="/" element={<LoginPage />}/>
              <Route path="/createUser" element={<CreateUser />}/>
            </Routes>
          </header>
        </Router>
    </div>
  );
}

export default App;