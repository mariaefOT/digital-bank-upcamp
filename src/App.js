import Home from './pages/Home';
import CheckingView from './pages/CheckingView';
import CreateCheckingView from './pages/CreateCheckingView';
import LoginView from './pages/LoginView';
import NavbarLayout from './components/NavbarLayout';
import SignUpView from './pages/SignUpView';
import WithdrawalsView from './pages/WithdrawalsView';
import DepositsView from './pages/DepositsView';
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
                <Route path="/deposits" element={<DepositsView />}/>
                <Route path="/withdrawals" element={<WithdrawalsView />}/>
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