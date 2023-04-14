import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Dashboard = ({children}) => {
  const history = useNavigate();
  const [show,setShow]=useState(false);
  const [ball,setball]=useState(false);
  const[time,settime]= useState(false);

  function display(e){
    if(show===false){
      setShow(e)

    }
    else{
      setShow(false)
    }
      
  }
  function display1(e){
    if(ball===false){
      setball(e)

    }
    else{
      setball(false)
    }
      
  }
  function display2(e){
    if(time===false){
      settime(e)

    }
    else{
      settime(false)
    }
      
  }



  return (
    <div className='dashboard'>
      <div className='side-bar'>
        <i class="fas fa-laugh-wink"></i>
        <h3 className='sb1'>SB ADMIN
          <sup>2</sup>
        </h3>
        <hr></hr>
        <h4>
        <i class="fas fa-fw fa-tachometer-alt"></i>
          <button onClick={() => history("/dashboard1")} id="dash">Dashboard</button>

        </h4>
        <hr></hr>
        <div className='interface'>INTERFACE</div>

        <div className="mute">
        <i class="fas fa-fw fa-cog"></i>
        <button className='components' onClick={(e)=>display(true)}>Component</button>
    
        <button style={{display:show?'block':'none'}} onClick={() => history("/button") }id="bt">Button</button><br></br>

        <button style={{display:show?'block':'none'}} onClick={() => history("/cards") }id="car">Card</button><br></br>
        <hr></hr>
        </div>

        <i class="fas fa-fw fa-wrench"></i>
        <button className='utilities' onClick={(e)=>display1(true)}>Utilities</button><br></br>
        <button style={{display:ball?'block':'none'}} onClick={() => history("/color")} id="co">Colors</button><br></br>
        <button style={{display:ball?'block':'none'}} onClick={() => history("/border")}id="bo">Borders</button><br></br>
        <button style={{display:ball?'block':'none'}} onClick={() => history("/Animation")}id="ani">Animations</button><br></br>
        <button style={{display:ball?'block':'none'}} onClick={() => history("/other")}id="other">Other</button>
        <hr ></hr>



        
        <div className='addons'>ADDONS</div>
        <i class="fas fa-fw fa-folder"></i>
       <button className='log' onClick={(e)=>display2(true)}>Pages</button><br></br>
        <button style={{display:time?'block':'none'}} onClick={() => history("/login")} id="log">Login</button><br></br>
        <button style={{display:time?'block':'none'}} onClick={() => history("/register")}id="reg">Register</button><br></br>
        <button style={{display:time?'block':'none'}} onClick={() => history("/forgotpassword")}id="for">Forget Password</button><br></br>
        <button style={{display:time?'block':'none'}} onClick={() => history("/404page")}id="four">404 Page</button><br></br>
        <button style={{display:time?'block':'none'}} onClick={() => history("/blank")}id="blank">Blank Page</button>

        <div className='table'>
    
        <i class="fas fa-fw fa-table"></i>
          <button onClick={()=>history("/table")} className="too" >Table</button>
        </div>
        <hr></hr>
        <div className='containers'>
          <img src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_rocket.svg" alt=""></img><br></br>
          <p className='pack'>  <strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
          <a className="prod" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>

        
        </div>
      </div>

      <div className='main-content'>
      {children}
      {/* <button onClick={() => history("/dashboard1")} id="you">Back To Dashboard</button> */}
      </div>

    </div>

  )
}










