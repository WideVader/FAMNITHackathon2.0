import "../css/login.css"


export const Login = () => {
    return (
        <div className="container">
            <h2 className="signIn">Sign in to NAME</h2>
            <div className="form">
                <label className="loginLabel" htmlFor="text">Username or email address</label>
                <input className="inputText" type="text" name="" id="text" />
                <label className="loginLabel" htmlFor="password">Password</label>
                <input className="inputPassword" type="password" name="password" id="" />
                <button className="signButton">Sign in</button>
            </div>
            <div className="footer"> <p>New to NAME?</p> <a href="">Create an account</a>. </div>
        </div>
    )
}