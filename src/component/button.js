import { useNavigate } from "react-router-dom";
import { Dashboard } from "../Dashboard/dashboard";


export function Button() {
  const history = useNavigate();
  //  history("/button")
  return (

    <Dashboard>


      <div className='buttoncomponent'>

       


        <h3 className='button'>Button</h3>

        <div className="container2">
          <div className="grid-containers">
            <div className="grid-item7" >
              <h3 className='circle'>Circle Buttons</h3>
              <p className='font'>  Use Font Awesome Icons (included with this theme package) along with the circle
                buttons as shown in the examples below!</p>

              <code className='codes'>.btn-circle</code> <br></br>
              <i className="fab fa-facebook-f" id="far"></i>
              <i className="fas fa-check"></i>
              <i className="fas fa-info-circle"></i>
              <i className="fas fa-exclamation-triangle"></i>
              <i className="fas fa-trash"></i><br></br>

              <code className='codes1'>.btn-circle .btn-sm</code><br></br>
              <i className="fab fa-facebook-f" id="font1"></i>
              <i className="fas fa-check" id="font2"></i>
              <i className="fas fa-info-circle" id="font3"></i>
              <i className="fas fa-exclamation-triangle" id="font4"></i>
              <i className="fas fa-trash" id="font5"></i><br></br>

              <code className='codes2'>.btn-circle .btn-lg</code><br></br>
              <i className="fab fa-facebook-f" id="fonts1"></i>
              <i className="fas fa-check" id="fonts2"></i>
              <i className="fas fa-info-circle" id="fonts3"></i>
              <i className="fas fa-exclamation-triangle" id="fonts4"></i>
              <i className="fas fa-trash" id="fonts5"></i><br></br>

            </div>
            <div className="grid-item8">
              <h3 className='circle'>Split Buttons with Icon</h3>
              <p className='font'>Works with any button colors, just use the <code className='code'>.btn-icon-split</code> class and
                the markup in the examples below. The examples below also use the<code className='code'>.text-white-50</code> helper class on the icons for additional styling,
                but it is not required.</p>

              <div className=" btn-icon-split">
                <a>
                  <span className="icon text-white-50">
                    <i class="fas fa-flag"></i>
                  </span>
                  <span className="text">Split Button Primary</span>
                </a>
              </div>
              <br></br>

              <div className=" btn-icon1-split">
                <a  >
                  <span className="icon text-white-50">
                    <i className="fas fa-check" id="check-5"></i>
                  </span>
                  <span className="text">Split Button Success</span>
                </a>
              </div>
              <br></br>
              <div className=" btn-icon2-split">
                <a  >
                  <span className="icon text-white-50">
                    <i class="fas fa-info-circle" id="circle"></i>
                  </span>
                  <span className="text">Split Button Info</span>
                </a>
              </div>
              <br></br>

              <div className=" btn-icon3-split">
                <a  >
                  <span className="icon text-white-50">
                    <span class="icon text-white-50">
                      <i class="fas fa-exclamation-triangle" id="tri"></i>
                    </span>
                  </span>
                  <span className="text">Split Button Warning</span>
                </a>
              </div>
              <br></br>

              <div className=" btn-icon4-split">
                <a  >
                  <span className="icon text-white-50">
                    <i class="fas fa-trash" id="trash"></i>
                  </span>
                  <span className="text">Split Button Danger </span>
                </a>
              </div>
              <br></br>

              <div className=" btn-icon5-split">
                <a  >
                  <span className="icon text-white-50">
                    <i class="fas fa-arrow-right" id="arr"></i>
                  </span>
                  <span className="text">Split Button Secondary</span>
                </a>
              </div>
              <br></br>

              <div className=" btn-icon6-split">
                <a >
                  <span className="icon text-white-50">
                    <i class="fas fa-arrow-right" id="rig"></i>
                  </span>
                  <span className="text">Split Button Light</span>
                </a>
              </div>
              <p className='work'>Also works with small and large button classes!</p>
              <div className=" btn-icon7-split">
                <a >
                  <span className="icon text-white-50">
                    <i class="fas fa-flag"></i>
                  </span>
                  <span className="text">Split Button Small</span>
                </a>
              </div>
              <br></br>
              <div className=" btn-icon8-split">
                <a >
                  <span className="icon text-white-50">
                    <i class="fas fa-flag"></i>
                  </span>
                  <span className="text1">Split Button Large</span>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className='brand'>
          <h3 className='branding'>Brand Buttons</h3>
          <p className='feature'>Google and Facebook buttons are available featuring each company's respective
            brand color. They are used on the user login and registration pages.</p>

          <p className='create'>You can create more custom buttons by adding a new color variable in the
            <code className='code'>_variables.scss</code> file and then using the Bootstrap button variant
            mixin to create a new style, as demonstrated in the <code className='code'>_buttons.scss</code>
            file.</p>

          <button type="submit" id='sub'>
            <i className="fab fa-google fa-fw"></i>.btn-google
          </button>

          <button type="submit" id='sub1'>
            <i className="fa-brands fa-facebook-f"></i>.btn-facebook
          </button>
        </div>


      </div>

    </Dashboard>

  );
}





