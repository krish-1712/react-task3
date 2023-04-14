import { useNavigate } from "react-router-dom";
import { Dashboard } from "../Dashboard/dashboard";

export function Animation() {
  const history=useNavigate();
    return (
      <Dashboard>
      <div className='Animation'>

        <h3 className='Animation'>Animation Utilities</h3>
  
        <p class="past">Bootstrap's default utility classes can be found on the official <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
          below were created to extend this theme past the default utility classes built into Bootstrap's
          framework.</p>
  
  
  
        <div className="contain">
          <div className="grid-container1">
            <div className="grid-items-in" >
              <h3 className='grow'>Grow In Animation Utilty</h3>
              <code className='coded'>.animated--grow-in</code>
              <br></br>
              <p className='eg'>Navbar Dropdown Example:</p>
             <div className="rokes">
              <span className='nav'>Navbar</span>
               <span id='drop'>Dropdown</span>
              <select id="navbar">
                <option value="Action">Action</option>
                <option value="Action1">Another action</option>
                <hr></hr>
                <option value="card">Something else here</option>
              </select>
              </div>
             
            
             
  
  
              <p className='transform'>Note: This utility animates the CSS transform property, meaning it will override any existing transforms on an element being animated! In this theme,
                the grow in animation is only being used on dropdowns within the navbar.</p>
            </div>
            <div className="grid-items-is">
              <h3 className='fades  '>Fade In Animation Utilty</h3>
              <code className='coded'>.animated--fade-in</code>
              <br></br>
              <p className='eg1'>Navbar Dropdown Example:</p>
              <div className="roke">
              <span className='nav1'>Navbar</span>
              <span id='drop1'>Dropdown</span>
              <select id="navbar1">
                <option value="Action">Action</option>
                <option value="Action1">Another action</option>
                <hr></hr>
                <option value="card">Something else here</option>
              </select>
              </div>
  
              <p className='eg2'>Dropdown Button Example:</p>
  
              <button type="submit" id='fade1'> Dropdown
              <select id="night">
                <option value="Action" className='Action'>Action</option>
                <option value="Action1" className='Action1'>Another action</option>
                <hr></hr>
                <option value="here" className='here'>Something else here</option>
              </select>
              </button>
  
  
              <p className='transform1'>Note: This utility animates the CSS opacity property, meaning it will override any
               existing opacity on an element being animated!</p>
            </div>
          </div>
        </div>
  
  
        
      </div>
    
      </Dashboard>
    );
  }
  

  
  
  