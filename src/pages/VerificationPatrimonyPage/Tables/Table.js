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
  const [Checked,SetChecked] = useState(false);
  var patrimonys = [{}];
  function GetData(){
    axios.get(`http://localhost:3500/patrimonys/${10}`)
    .then((response)=>{setData(response.data)})

  }
  useEffect(()=>{
    setTheme(states.NavData.value.theme);
    GetData();
  },[states.NavData])
  
  return (
    <>
    <Header/>
    <Title title="Verificação de Patrimônio"/>

    {console.log(patrimonys)}
      <div className="containerUp-v" data-theme={theme}>
        {/* <FilterTable /> */}
        <div className="tableContainer">
          <button className="btn-add-patrimonio">
        
          </button>
          <div className="subContainer">
            <table className="table">
              <thead className="thead">
                <tr>
                  <td></td>
                  <td>N° de identificação</td>
                  <td>Nome/modelo</td>
                  <td>Local</td>
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
                    <p className="id-object">{index?.patrimonies[0]?.nPatrimony}</p>
                  </td>
                  <td>
                    <span>{index?.patrimonies[0]?.type}</span>
                  </td>
                  <td>
                    <span>Sala: {index?.nRoom}</span>
                  </td>
                  <td >
                    <span>{index?.patrimonies[0]?.status}</span>
                  </td> 
                  <td >
                    <input type="checkbox" checked={Checked===true?patrimonys.push({number:index?.patrimonies[0]?.nPatrimony}):console.log(patrimonys.indexOf(index?.patrimonies[0]?.nPatrimony))} onChange={(e)=>{SetChecked(!false)}}/>
                  </td> 
                </tr>
                  )
                })}                
              </tbody>
            </table>
          </div>
          <div className="tabbleFooter">
            <div className="pagination">
              <nav>
                <ul>
                  <li className="arrows">
                    <FaChevronLeft size={20} />
                  </li>
                  <li className="numberSelected">1</li>
                  <li className="number">2</li>
                  <li className="number">3</li>
                  <li className="number">4</li>
                  <li className="number">5</li>
                  <li className="arrows">
                    <FaChevronRight size={20} />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <button className="btn-finaliza">Finalizar</button>
      </div>
    </>
  );
}

export default  VerificationPatrimonyTable;
