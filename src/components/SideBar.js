import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function SideBar(props){
    let [isOpened,toggleOpen] = useState(props.isOpened);
    let navigate = useNavigate();
    function toggleSubMenu(e){
        if(e.target.parentElement.classList.contains('close')){
            e.target.parentElement.classList.remove('close');
        }
        else {
            e.target.parentElement.classList.add('close');
        }   
    }

    return(
        <aside className={(isOpened) ? '' : 'close'}>
            <figure><img src={require('../assets/imgs/logo.png')} /></figure>
            <ul>
                <li className="icon-dashboard" onClick={()=>navigate('/dashboard')}><span>Dashboard</span></li>
                <li className="icon-reports" onClick={()=>navigate('/reports')}><span>Reports</span></li>
                <li className="icon-options"><span>Configurations</span></li>
                <li className={"icon-employees has-children " + ((isOpened) ? '' : 'close')} onClick={toggleSubMenu}><span>Employees</span>
                    <ul className="close">
                        <li className="icon-technician"><span>Technicians</span></li>
                        <li className="icon-tow"><span>Tow Operators</span></li>
                        <li className="icon-ridesharer"><span>Ride Sharers</span></li>
                    </ul>
                </li>
                <li className="icon-caret" onClick={()=>{toggleOpen(!isOpened);}}><span>Hide SideBar</span></li>
            </ul>
        </aside>
    );  
}


export default SideBar;