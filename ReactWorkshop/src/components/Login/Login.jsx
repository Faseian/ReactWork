import axios from "axios";
import "./Login.css"

function Login() {
    function handleClick() {
        const userData = {
            username: document.getElementById("username"),
            password: document.getElementById("password")
        }
        axios.post("http://localhost:3000/api/auth/login", userData)
    }

    return (
        <div className="login-container">
            <form action="/api/login" className="form-container">
                <h1 className="login-title">Login</h1>
                <input type="text" placeholder="Username" id="username" className="signup-input"/>
                <input type="password" placeholder="Password" id="password" className="signup-input"/>
                <input type="button" value="Login!" className="signup-input"/>
            </form>
        </div>
    )
}

export default Login;