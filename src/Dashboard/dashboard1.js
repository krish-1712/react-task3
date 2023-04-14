import { useNavigate } from "react-router-dom";
import { Dashboard } from "./dashboard";


export default function Dash({ children }) {
  const history=useNavigate();
 
  return (

    <Dashboard>
      <div className='main-content'>
        {children}

        <h2 className="dot">Dashboard</h2>
        <div className='dash'>
          <div className='earn'>

            < p className='rolling-rom'>EARNINGS (MONTHLY)</p>
            <i class="fas fa-calendar fa-2x text-gray-300"></i>
            < p className='rolls1'>$40,000</p>

          </div>
          <div className='earn1'>
            < p className='roll2-rom'>EARNINGS (ANNUAL)</p>
            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
            < p className='rolls2'>$215,000</p>

          </div>
          <div className='earn2'>
            < p className='roll3-rom'>TASK</p>
            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
            <label for="file" className='rolls3'>50%</label>
            <progress id="file" value="50" max="100"> 50% </progress>



          </div>
          <div className='earn3'>
            < p className='roll4-rom'>PENDING REQUESTS</p>
            <i class="fas fa-comments fa-2x text-gray-300"></i>
            < p className='rolls4'>18</p>

          </div>
        </div>
        <div className="card-header">
          <h3 className='projects'>Projects</h3>

          <div className='bar'>
            <div>
              <label for="file" className='server'>Server Migration<span className='migration'>20%</span></label><br></br>
              <progress id="file1" value="20" max="100"> 20% </progress>
            </div>
            <div className='sm'>
              <label for="file" className='Sales'>Sales Tracking<span className='Tracking'>40%</span></label><br></br>
              <progress id="file1" value="40" max="100"> 40% </progress>
            </div>

            <div className='sm1'>
              <label for="file" className='Customer'>Customer Database<span className='Database'>60%</span></label><br></br>
              <progress id="file2" value="60" max="100"> 60% </progress>
            </div>

            <div className='sm2'>
              <label for="file" className='Payout'>Payout Details<span className='Details'>80%</span></label><br></br>
              <progress id="file3" value="80" max="100"> 80% </progress>
            </div>

            <div className='sm2'>
              <label for="file" className='Payout'>Payout Details<span className='Details'>80%</span></label><br></br>
              <progress id="file3" value="80" max="100"> 80% </progress>
            </div>

            <div className='sm3'>
              <label for="file" className='Account'>Account Setup<span className='Setup'>Complete!</span></label><br></br>
              <progress id="file4" value="100" max="100"> 100% </progress>
            </div>
          </div>

        </div>

        <div className="container1">
          <div className="grid-container">
            <div className="grid-item1" >
              <div className='CB'>
                <div className="card-body">
                  Primary
                  <div className="text-white">#4e73df</div>
                </div>
                <div className="card-body2">
                  Success
                  <div className="text-white">
                    #1cc88a
                  </div>
                </div>
                <div className="card-body3">
                  Info
                  <div className="text-white">
                    #36b9cc</div>
                </div>
                <div className="card-body4">
                  Warning
                  <div className="text-white">
                    #f6c23e</div>
                </div>
                <div className="card-body5">
                  Danger
                  <div className="text-white">
                    #e74a3b</div>
                </div>
                <div className="card-body6">
                  Secondary
                  <div className="text-white">
                    #858796</div>
                </div>
                <div className="card-body7">
                  Light
                  <div className="text-white">
                    #f8f9fc</div>
                </div>
                <div className="card-body8">
                  Dark
                  <div className="text-white">
                    #5a5c69</div>
                </div>
              </div>
            </div>
            <div className="grid-item2">
              <div className='ill'>
                <h3 className='Illustrations'>Illustrations</h3>

                <img src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg" alt="" id="start"></img>
              
                <p className='add'>Add some quality, svg illustrations to your project courtesy of <a target="_blank" rel="nofollow" id='draw' href="https://undraw.co/">unDraw</a>, a
                  constantly updated collection of beautiful svg images that you can use
                  completely free and without attribution!</p>

                <a target="_blank" rel="nofollow" className="browse" href="https://undraw.co/">Browse Illustrations on
                  unDraw →</a>
              </div>
            </div>
          </div>
        </div>

        <div className='develop'>
          <h3 className='development'>Development Approach</h3>

          <p className='p1'>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce
            CSS bloat and poor page performance. Custom CSS classes are used to create
            custom components and custom utility classes.</p>

          <p class="mb">Before working with this theme, you should become familiar with the
            Bootstrap framework, especially the utility classes.</p>
        </div>

     


      </div>
    </Dashboard>



  );
}