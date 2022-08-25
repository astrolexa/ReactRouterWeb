import '../css/Tour.css';
import { Outlet } from "react-router-dom";
function Tour(){
    return (
       <div className="Tourwrap">    
        <Outlet />       
       </div>
    )
}
export default Tour;