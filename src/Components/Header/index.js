import "./styleHeader.css"
import * as React from "react";
import { FaBars } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import Sidebar from "../Sidebar";
import Senai from '../../assets/senai.png'
import Sair from '../../assets/sair.svg'
import { produceWithPatches } from "immer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
export default function Header(props){

    const [sidebar, setSidebar] = React.useState(false);
    const showSidebar = () => setSidebar(!sidebar)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    if(props.tema == 'dark'){
        var cor = "header-dark"
    }
    else{
        var cor = "header-light"
    }
    function LogoutUser(){
        navigate("/")
        dispatch({type:"REMOVE_TOKEN"})
    }
    return(
        <>
            <header className={cor}>
                <div className="header-content-left">
                    <FaBars size={25} id="menu-button" onClick={showSidebar}/>
                    <img id="senai-logo" src={Senai} alt="" />
                </div>
                <div>
                    <button id="button-exit">
                        <BiLogIn size={30}  onClick={()=>{LogoutUser()}}/>
                    </button>
                </div>
            </header>
            <div>
                {sidebar && <Sidebar active={setSidebar} tema={props.tema}/>}
            </div>
        </>
    );
}