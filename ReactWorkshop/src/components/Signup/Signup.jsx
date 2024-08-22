import axios from "axios";
import "./Signup.css"

function Signup() {
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
                <h1 className="login-title">Register New Account</h1>
                <input type="text" placeholder="Username" id="username" className="signup-input"/>
                <input type="password" placeholder="Password" id="password" className="signup-input"/>
                <input type="button" value="Sign-Up!" className="signup-input"/>
            </form>
        </div>
    )
}

export default Signup;