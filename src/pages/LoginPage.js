import Login from "../components/Login";
import { Link } from 'react-router-dom';
import '../CSS/Login.css';

const LoginPage = () => {
    return(
        <div className="container">
            <div className="login-div">
                <Login/>
                <div>
                    Don't have account? 
                    <Link to="/createUser">
                        <p>Sign Up Here</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;