import "./styleHeader.css"
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import Sidebar from "../Sidebar";
import Senai from '../../assets/senai.png'
import Sair from '../../assets/sair.svg'
import { BsFillMoonFill } from 'react-icons/bs'
import { BsSunFill } from 'react-icons/bs'
import useLocalStorage from "use-local-storage";
import { useDispatch, useSelector } from "react-redux";


export default function Header(){
    const [sidebar, setSidebar] = React.useState(false);   
    const dispatch = useDispatch();
    const states = useSelector((state)=>state);
    
    useEffect(()=>{
        const reduxValue = states.NavData.value.theme;
        const localstorageValue = localStorage.getItem("theme");
        localStorage.setItem("theme", reduxValue || localstorageValue || "light" );
    },[states.NavData])

    return(
        <>
            <header>
                <div className="header-content">
                    <FaBars size={25} id="menu-button" onClick={()=>setSidebar(!sidebar)}/>
                    <img id="senai-logo" src={Senai} alt="" />
                </div>
                <div className="header-content">
                    <div>
                        <button onClick={()=>dispatch({type:"ADD_NAV_DATA", data:{...states.NavData.value, theme:"light"}})} className="label">
                            <BsSunFill color="white" />
                        </button>
                        <button onClick={()=>dispatch({type:"ADD_NAV_DATA", data:{...states.NavData.value, theme:"dark"}})} className="label">
                            <BsFillMoonFill color="#292929" />
                        </button>
                    </div>
                    <button id="button-exit">
                        <BiLogIn size={30} />
                    </button>
                </div>
            </header>
            <div>
                {sidebar && <Sidebar active={setSidebar}/>}
            </div>
        </>
    );
}