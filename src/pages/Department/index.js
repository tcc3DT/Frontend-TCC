import React, { useEffect, useState } from "react";
import "./styleDrop.css";
import Header from "../../Components/Header";
import ModalDeparmento from "../../Components/modalDepartamento";
import { FaFlask, FaDoorClosed, FaTools, FaBook, FaUtensils } from "react-icons/fa";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';


function Departamentos() {
  const states = useSelector((state)=>state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [departmentTypes, setDepartmentTypes] = useState([]);

  useEffect(()=>{
    const token = states.Token.value != "" ? states.Token.value : sessionStorage.getItem("token");
    if(states.Token.value = "") dispatch({type:"ADD_TOKEN", data:token});
    axios.get(`${process.env.REACT_APP_API_URL}/department/0`,{headers:{"x-access-token":token}})
    .then(({data})=>{
      const allArr = [];
      data.forEach(({id}) => {
        axios.get(`${process.env.REACT_APP_API_URL}/department/${id}?rooms=true`,{headers:{"x-access-token":token}})
        .then(({data:{name, id, rooms}})=>{
          const customRoom = rooms;
          for(let i in customRoom){
            customRoom[i].icon = (<FaFlask size={15}/>)
          }
          allArr.push([id, name, customRoom]);
        })
      });
      if(departmentTypes.length === 0) setDepartmentTypes(allArr);
    })
    .catch(()=>navigate("/"));
  },[])

  function nextPage(idDepartment){
    dispatch({type:"ADD_NAV_DATA", data:{idDepartment}})
    navigate("/table");
  }

  return (
    <>
      <Header/>
      <ModalDeparmento/>
        <section id="selectors"> 
          {departmentTypes.map(([id, name, rooms])=>(
            <div key={id} className="drop-all">
              <Select placeholder={name}
                options={rooms}
                getOptionLabel={(e)=>{
                  <div style={{ display: "flex", alignItems: "center", height: 40 }}>
                    {e.icon}
                    <span style={{ marginLeft: 5 }}>{e.nRoom}</span>
                  </div>
                }}
              />
            </div>
          ))}
        </section>
    </>
  );
}

export default Departamentos;
