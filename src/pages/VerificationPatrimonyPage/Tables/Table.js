import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSelector } from "react-redux";
import FilterTable from '../../../Components/FilterTable';
import NewPatrimonioModal from '../../../Components/newpatrimoniomodal';
import "../Styles/table.css";
import Header from "../../../Components/Header";
import axios from "axios";
import Title from "../../../Components/TitlePage";


function VerificationPatrimonyTable() {
  const [data, setData] = useState([]);
  const states = useSelector((states)=>states);    
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [patrimonys,SetPatrimonys] = useState([]);
  const[CurrentValue,SetCurrentValue] = useState();
  const [Exists,SetExists] = useState(false)
  const Room = sessionStorage.getItem("room")
  const department = sessionStorage.getItem("department")


  function RegisterPatrimony(){
    console.log(patrimonys)
    axios.post(`http://localhost:3500/VerifyPatrimonys/${Room}`,patrimonys)
    .then((response)=>{console.log(response.data)})
    .catch((err)=>{console.log(err)})
  }
  function SetPatrimony(value){
    SetCurrentValue(value);
    console.log(CurrentValue)
    patrimonys.push(value)
    patrimonys.forEach((index)=>{
      console.log(index)
      if(CurrentValue !=index){
  
        // var indexArr = patrimonys.indexOf(CurrentValue)
        // SetExists(true)
        // SetCurrentValue("")
        // patrimonys.splice(indexArr)
      console.log(index)
      }
      else{
        console.log("valor já existe")
      }
    })
    // if(value ==CurrentValue){
    //   var index = patrimonys.indexOf(value)
    //   SetCurrentValue("")
    //   patrimonys.splice(index)
    // }
    // else{

    //   SetCurrentValue(value)
    // }
  }
  function GetData(){
    axios.get(`http://localhost:3500/${department}/patrimonys/${Room}`)
    .then((response)=>{
      console.log(response.data)
      setData(response.data[0]?.patrimonies)})

  }
  useEffect(()=>{
    setTheme(states.NavData.value.theme);
    GetData()
  },[states.NavData])
  
  return (
    <>
    <Header/>

    <Title title="Verificação de Patrimônio"/>

    {console.log(patrimonys)}
      <div className="containerUp-v" data-theme={theme}>
        {/* <FilterTable /> */}
        <div className="tableContainer-verification">
          <button className="btn-add-patrimonio">
        
          </button>
          <div className="subContainer">
            <table className="table">
              <thead className="thead">
                <tr>
                  <td></td>
                  <td>N° de identificação</td>
                  <td>Nome/modelo</td>
                  <td>valor</td>
                  <td>Situação</td>
                  <td>verificar</td>
                </tr>
              </thead>
              <tbody>
                {data.map((index)=>{
                  return(
          <tr>
                  <td>
              
                  </td>
                  <td>
                    <p className="id-object">{index?.nPatrimony}</p>
                  </td>
                  <td>
                    <span>{index?.type}</span>
                  </td>
                  <td>
                    <span>sala: 15</span>
                  </td>
                  <td >
                    <span>{index?.status}</span>
                  </td> 
                  <td >
                    <input type="checkbox"  onChange={(e)=>{SetPatrimony(index?.nPatrimony)}}/>
                  </td> 
                </tr>
                  )
                })}
                
  
                  
                
              </tbody>
         
            </table>
       
          </div>
          <button onClick={()=>{RegisterPatrimony()}}>Finalizar</button>
          <div className="tabbleFooter">
            <div className="pagination"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default  VerificationPatrimonyTable;
