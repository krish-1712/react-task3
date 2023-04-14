
import { Navigate, Route, Routes } from 'react-router-dom';
import { Button } from './component/button';
import './Dashboard/App6.css';
import './component/App7.css';
import './component/App8.css';
import './Dashboard/App9.css';
import './Dashboard/App10.css';
import './component/App11.css';
import './Dashboard/App13.css';

import './component/App12.css';
import './component/App2.css';
import './component/App1.css';
import './component/App3.css';
import './component/App4.css';
import './component/App5.css';
import './App.css';


import { Dashboard } from './Dashboard/dashboard';
import { Cards } from './component/cards';
import { Color } from './Dashboard/color';
import { Border } from './Dashboard/border';
import { Animation } from './component/Animation';
import { Others } from './component/other';
import Login from './component/login';
import Register from './component/register';
import { Table } from './component/table';
import Dash from './Dashboard/dashboard1';
import Forgot from './component/forgetpassword';
import Page from './component/404page';
import Blank from './component/blank';


function App() {

  return (
    <div className='App'>
      <Routes>
        <Route exact path='/dashboard' element={<Dashboard/>}>
        </Route>
        <Route exact path='/dashboard1' element={<Dash/>}>
        </Route>

        <Route exact path='/button' element={<Button/>}>
        </Route>
        <Route exact path='/cards' element={<Cards/>}>
        </Route>
        <Route exact path='/color' element={<Color/>}>
        </Route>
        <Route exact path='/border' element={<Border/>}>
        </Route>
        <Route exact path='/Animation' element={<Animation/>}>
        </Route>

        <Route exact path='/other' element={<Others/>}>
         </Route>
         <Route exact path='/login' element={<Login/>}>
       </Route>
        <Route exact path='/register' element={<Register/>}>
        </Route> 
        <Route exact path='/forgotpassword' element={ <Forgot/>}>
        </Route> 
        <Route exact path='/404page' element={   <Page/>}>
        </Route>
        <Route exact path='/blank' element={   <Blank/>}>
        </Route> 
       
        <Route exact path='/table' element={<Table/>}>
        </Route> 

      <Route exact path="/dashboard1" element={  <Navigate exact path='/dashboard1'/>}>
            
            </Route>
    
   
            <Route exact path="*" element={ <Dash/>}>
              </Route>
       





      </Routes>


    </div>

  );


}

export default App;



