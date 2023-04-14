import { useNavigate } from "react-router-dom";
import { Dashboard } from "../Dashboard/dashboard";


export default function Blank() {
    const history = useNavigate();
    return (
        <Dashboard>
            <div>
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                </nav>

                <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>
             

            </div>



        </Dashboard>



    );
}