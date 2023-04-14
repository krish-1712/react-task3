import { useNavigate } from "react-router-dom"


export default function Login() {
    const history=useNavigate();
    return (
        <div id="Login">
            <div className="container-2">
                <div className="grid-container-lock">
                    <div className="grid-item-loot" id="img">
                    </div>
                    <div className="grid-item-looted">
                        <h3 id="headers">Welcome Back!</h3>
                        <form>
                            <label for="email">
                                <input type="text" id="email" placeholder='Enter Email Address'></input>
                            </label>
                            <br></br>
                            <label for="Password">
                                <input type="text" id="password" placeholder='Password'></input>
                            </label>
                            <br></br>
                            <label for="chechbox" className='check1'>
                                <input type="checkbox" id="choose"></input>
                                Remember Me
                            </label>
                            <br></br>
                            <button type="submit" id='role-s'>Login</button>
                            <hr className='roll'></hr>
                            <button type="submit" id='role1'>
                                G Login with Google
                            </button>
                            <br></br>
                            <button type="submit" id='role2'>
                                f Login with Facebook
                            </button>
                            <hr className='roll'></hr>
                            <a className="small" href="forgot-password.html">Forgot Password?</a>
                            <br></br>
                            <a className="small" href="register.html">Create an Account!</a>
                        </form>
                    </div>
                </div>
            </div>
          
        </div>

    )
}




