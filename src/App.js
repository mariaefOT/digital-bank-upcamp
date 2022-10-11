import Home from './pages/Home';
import ViewChecking from './pages/ViewChecking';
import CreateChecking from './pages/CreateChecking';
import LoginScreen from './pages/LoginScreen';
import NavbarLayout from './components/NavbarLayout';
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
              <Route path="/" element={<LoginScreen />}/>
            </Routes>
          </header>
        </Router>
    </div>
  );
}

export default App;