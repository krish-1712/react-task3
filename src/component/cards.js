import { useNavigate } from "react-router-dom";
import { Dashboard } from "../Dashboard/dashboard";

export function Cards() {

  const history=useNavigate();
  
    return (
      <Dashboard>
      <div className='cards'> 
        <h3 className='card'>Cards</h3>
        <div className='dash1'>
          <div className='earns'>
            < p className='rolls'>EARNINGS (MONTHLY)</p>
            <i class="fas fa-calendar fa-2x text-gray"></i>
            < p className='rolled1'>$40,000</p>
           
          </div>
          <div className='earns1'>
            < p className='rolls'>EARNINGS (ANNUAL)</p>
            <i class="fas fa-dollar-sign fa-2x text-gray"></i>
            < p className='rolled1'>$215,000</p>
            
          </div>
          <div className='earns2'>
            < p className='rolls'>TASK</p>
            <i class="fas fa-clipboard-list fa-2x text-gray"></i>
            <label for="file" className='rolls1'>50%</label>
            <progress id="file" value="50" max="100"> 50% </progress>
           
          </div>
          <div className='earns3'>
            < p className='rolls'>PENDING REQUESTS</p>
            <i class="fas fa-comments fa-2x text-gray"></i>
            < p className='rolled1'>18</p>
            
          </div>
        </div>
  
        <div className="container3">
          <div className="grid-container3">
            <div className="grid-item5" >
              <h3 className='default'>Default Card Example</h3>
              <p className='style'>This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying
               the look and feel of this default card example.</p>
            </div>
            <div className="grid-item6">
              <h3 className='ex'>Dropdown Card Example</h3>
              <p className='menus'>Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, the Font Awesome vertical
               ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu.</p>
            </div>
          </div>
        </div>
  
  
        
        <div className="container4">
          <div className="grid-container1">
            <div className="grid-items1" >
              <h3 className='basic'>Basic Card Example</h3>
              <p className='use'>The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes,
               the style of the card component can be easily modified with no need for any custom CSS!</p>
            </div>
            <div className="grid-items2">
              <h3 className='col'>Collapsable Card Example</h3>
              <p className='click'>This is a collapsable card example using Bootstrap's built in collapse functionality.
              <b>Click on the card header</b> to see the card body collapse and expand!</p>
            </div>
          </div>
        </div>

     
        
      </div>
      </Dashboard>
    );
  }
  
 
  
  
  
  