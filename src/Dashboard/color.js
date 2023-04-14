import { useNavigate } from "react-router-dom";
import { Dashboard } from "./dashboard";

export function Color() {
  const history = useNavigate();

  // history("/Color")
  return (
    <Dashboard>

      <div className='color'>

     





        <h3 className='color'>Color Utilities</h3>

        <p className="mb-4">Bootstrap's default utility classes can be found on the official <a className='found' href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
          below were created to extend this theme past the default utility classes built into Bootstrap's
          framework.</p>

        <div className="container5">
          <div className="grid-container2">
            <div className="grid-itemed1" >
              <h3 className='custom'>Custom Text Color Utilities</h3>
              <div className='grane'>
                <p className='gray1'>.text-gray-100</p>
                <p className='gray2'>.text-gray-200</p>
                <p className='gray3'>.text-gray-300</p>
                <p className='gray4'>.text-gray-400</p>
                <p className='gray5'>.text-gray-500</p>
                <p className='gray6'>.text-gray-600</p>
                <p className='gray7'>.text-gray-700</p>
                <p className='gray8'>.text-gray-800</p>
                <p className='gray9'>.text-gray-900</p>
              </div>
            </div>
            <div className="grid-itemed2">
              <h3 className='Gradient'>Custom Background Gradient Utilities</h3>
              <p className='grade1'>.bg-gradient-primary</p>
              <p className='grade2'>.bg-gradient-primary</p>
              <p className='grade3'>.bg-gradient-primary</p>
              <p className='grade4'>.bg-gradient-primary</p>
              <p className='grade5'>.bg-gradient-primary</p>
              <p className='grade6'>.bg-gradient-primary</p>
              <p className='grade7'>.bg-gradient-primary</p>
              <p className='grade8'>.bg-gradient-primary</p>
            </div>
            <div className="grid-itemed3">
              <h3 className='scale'>Custom Grayscale Background Utilities</h3>
              <p className='bg1'>.bg-gray-100</p>
              <p className='bg2'>.bg-gray-200</p>
              <p className='bg3'>.bg-gray-300</p>
              <p className='bg4'>.bg-gray-400</p>
              <p className='bg5'>.bg-gray-500</p>
              <p className='bg6'>.bg-gray-600</p>
              <p className='bg7'>.bg-gray-700</p>
              <p className='bg8'>.bg-gray-800</p>
              <p className='bg9'>.bg-gray-900</p>
            </div>
          </div>
        </div>

        <div className='xm'>
          <h3 className='size'> Custom Font Size Utilities</h3>
          <p className='xs'>.text-xs</p>
          <p className='lg'>.text-lg</p>
        </div>


       


      </div>
    </Dashboard>
  );
}





