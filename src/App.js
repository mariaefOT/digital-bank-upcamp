import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import ViewChecking from './pages/ViewChecking';
import ViewCheckingAdmin from './pages/ViewCheckingAdmin';
import CreateChecking from './pages/CreateChecking';
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
          <NavigationBar/>
          <header className="App-header">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/viewChecking" element={<ViewChecking />}/>
              <Route path="/viewCheckingAdmin" element={<ViewCheckingAdmin />}/>
              <Route path="/createChecking" element={<CreateChecking />}/>
            </Routes>
          </header>
        </Router>
    </div>
  );
}

export default App;