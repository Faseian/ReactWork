import "./Login.css"

function Login() {
    return (
        <div className="login-container">
            
            <form action="/sign-up" className="form-container">
                <h1 className="login-title">Login</h1>
                <input type="text" placeholder="Username" id="username" className="signup-input"/>
                <input type="password" placeholder="Password" id="password" className="signup-input"/>
                <input type="button" value="Sign-Up!" className="signup-input"/>
            </form>
        </div>
    )
}

export default Login;