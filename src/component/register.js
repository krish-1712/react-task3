import { useNavigate } from "react-router-dom";



export default function Register(){
  const history=useNavigate();
    return(
          
           <div className="container">
        <div className="grid-container-6">
            <div className="grid-iteming" id="img">
            </div>
            <div className="grid-iteming-2">
                <h3 id="header1">Welcome Back!</h3>
                <form>
                <label for="fname">
                  <input type="text" id="first1" placeholder='First Name'></input>
                  </label>
                  <label for="lname">
                  <input type="text" id="last" placeholder='Last Name'></input>
                  </label>
                  <br></br>
                  <label for="email">
                  <input type="text" id="email" placeholder = 'Enter Email Address'></input>
                  </label> 
                  <br></br>
                  <label for="Password">
                  <input type="text" id="password" placeholder='Password'></input>
                  </label>

                  <label for="RepeatPassword">
                  <input type="text" id="RepeatPassword" placeholder='Repeat Password'></input>
                  </label>      
                  <br></br>
                  <button type="submit" id='role-90'>Register Account</button>
                  <hr className='roll'></hr>
                  <button type="submit" id='role1'>
                  <i class="fab fa-google fa-fw"></i> Register with Google
                  </button>
                  <br></br>
                  <button type="submit" id='role2'>
                    <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                  </button>
                  <hr className='roll'></hr>
                  <a className="small1" href="forgot-password.html">Forgot Password?</a>
                  <br></br>
                  <a className="small" href="register.html">Already have an account? Login!</a>
                </form>
             


            </div>
        </div>
       
    </div> 


    );
}