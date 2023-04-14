import { useNavigate } from "react-router-dom";
import { Dashboard } from "../Dashboard/dashboard";

export function Others() {
  const history=useNavigate();
    return (
      <Dashboard>
      <div className='Others'>  
        <h3 className='mode'>Other Utilities</h3>
  
        <p id="mx">Bootstrap's default utility classes can be found on the official <a className='mx-1' href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
          below were created to extend this theme past the default utility classes built into Bootstrap's
          framework.</p>
  
  
  
        <div className="contains">
          <div className="grid-container-5">
            <div className="grid-item-roll" >
              <h3 id='hidden'>Overflow Hidden Utilty</h3>
              <p className='set'>Use<code className='code'> .o-hidden</code>to set the overflow property of any element to hidden.</p>
            </div>
            <div className="grid-item-role">
              <h3 className='rotate'>Rotation Utilities</h3>
  
              <div className='rot'>
                <p>.rotate-15</p>
              </div>
  
              <div className='rot1'>
                <p className='rol'>.rotate-n-15</p>
              </div>
  
            </div>
  
          </div>
        </div>
        <div className='smalled'>
          <h3 className='pro'>Progress Small Utility</h3>
         
        <div className='bark'>
            <div>
              <label for="file" className='normal'>Normal Progress Bar<span className='pan'>70%</span></label><br></br>
              <progress id="pan1" value="70" max="100"> 70% </progress>
            </div>
            </div>
            <div className='bark'>
            <div>
              <label for="file" className='normal1'>Small Progress Bar<span className='pan'>70%</span></label><br></br>
              <progress id="pans" value="70" max="100"> 70% </progress>
  
              <p>Use the<code className='code'>.progress-sm</code>class along with<code className='code'>.progress</code></p>
            </div>
            </div>
        </div>
        <div className='small-is'>
          <h3 className='no'>Dropdown - No Arrow</h3>
          
          <button type="submit" className='arrow'> Dropdown (no arrow) </button>
          <p>Add the <code className='code'>.no-arrow </code>class alongside the<code className='code'>.dropdown</code></p>
        </div>
       
      </div>
      </Dashboard>
    );
  }
  

  
  
  