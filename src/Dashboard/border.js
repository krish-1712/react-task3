import { useNavigate } from "react-router-dom";
import { Dashboard } from "./dashboard";

export function Border() {
  const history=useNavigate();
  return (
    <Dashboard>
      <div className='Border'>

     

        <h3 className='border'>Border Utilities</h3>

        <p class="mb-3">Bootstrap's default utility classes can be found on the official <a className='off' href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
          below were created to extend this theme past the default utility classes built into Bootstrap's
          framework.</p>

        <div className="extend">
          <p className='bor1'>.border-left-primary</p>
          <p className='bor2'>.border-bottom-primary</p>
          <p className='bor3'>.border-left-secondary</p>
          <p className='bor4'>.border-bottom-secondary</p>
          <p className='bor5'>.border-left-success</p>
          <p className='bor6'>.border-bottom-success</p>
          <p className='bor7'>.border-left-info</p>
          <p className='bor8'>.border-bottom-info</p>
          <p className='bor9'>.border-left-warning</p>
          <p className='bor10'>.border-bottom-warning</p>
          <p className='bor11'>.border-left-danger</p>
          <p className='bor12'>.border-bottom-danger</p>
          <p className='bor13'>.border-left-dark</p>
          <p className='bor14'>.border-bottom-dark</p>
        </div>


       
      </div>
     
    </Dashboard>
  );
}





