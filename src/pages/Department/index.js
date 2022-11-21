import React, { useEffect, useState } from "react";
import "./styleDrop.css";
import Header from "../../Components/Header";
import ModalDeparmento from "../../Components/modalDepartamento";
import { FaFlask, FaDoorClosed, FaTools, FaBook, FaUtensils } from "react-icons/fa";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import Title from "../../Components/TitlePage";


function Departamentos() {
  const states = useSelector((state)=>state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [departmentTypes, setDepartmentTypes] = useState([]);
  
  useEffect(()=>{
    const token = states.Token.value != "" ? states.Token.value : sessionStorage.getItem("token");
    
    if(states.Token.value = ""){dispatch({type:"ADD_TOKEN", data:token});}
    
    axios.get(`http://localhost:3500/department`,{headers:{"x-access-token":token}})
    .then(({data})=>{
      const newData = data.map((departments)=>{
        return departments

      });
      setDepartmentTypes(newData);
    })
    // .catch(()=>navigate("/"));
  },[])

  function nextPage(nRoom,department){
    console.log(department)
    dispatch({type:"ADD_NAV_DATA", data:{nRoom}})
    sessionStorage.setItem("room",nRoom)
    sessionStorage.setItem("department",department)
    navigate("/table");
  }

 

  function Selector({name, rooms}){
    console.log(sessionStorage.getItem("token"))
    return(
        <div className="drop-all">


         {rooms &&
          
          <Select placeholder={name}
            options={rooms}
            onChange={(e)=>nextPage(e.nRoom,name)}
            getOptionLabel={(e)=>(
              <div className="option-selector">
                <FaDoorClosed size={15}/>
    
                <p>{e.nRoom}</p>
              </div>
            )}
          />
  
         }
        </div>
    );
  };
  const [theme, setTheme] = useState("Departmentlight");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "Departmentlight" ? "Departmentdark" : "Departmentlight"));

  }
  return (
    <>
      <div >
      <Header/>
      <Title title="Departamentos"/>
      <ModalDeparmento/> 
      {/* Desativar sidebar nessa tela */}
      {departmentTypes.length != 0 &&
        <section id="selectors">
          {departmentTypes.map(({id, name, rooms})=>(<Selector key={id} name={name} rooms={rooms} id={id} />))} 
        </section>
      }
      </div>
    </>
  );
}

export default Departamentos;