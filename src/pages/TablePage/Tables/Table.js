import React, { useState, useEffect} from "react";
import useLocalStorage from "use-local-storage";
import "../Styles/table.css";
import ModalInfo from "../../../Components/ModalInfo";
import NewPatrimonioModal from '../../../Components/newpatrimoniomodal';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import axios from 'axios'
import Categories from "./Categories";
import SwitchComp from "../../../Components/Switch";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Title from "../../../Components/TitlePage";

function Tables() {

  const [data, SetDatas] = useState(Categories);
  const [Filter, SetFilter] = useState([]);
  const states = useSelector((states)=>states);    
  const [theme, setTheme] = useState("light")
  var patrimonys = [];
  const dispatch = useDispatch();
  const Room = sessionStorage.getItem("room")
  const Department = sessionStorage.getItem("department")
  
  const toggleTheme = () =>{
      setTheme((curr) => (curr === "light" ? "dark" : "light"))
      
  }
  async function filterResult(value) {
   
    if (Filter.length>0) {
      SetDatas([])
      await axios.post(`http://localhost:3500/${Room}/filterPatrimony/${Department}/${Filter}`)
        .then((response) => {
          SetDatas(response.data.FilterPatrimony[0].rooms[0]?.patrimonies)
          
          
        })
        .catch((err) => { console.log(err) })
    }
    else{
      SetDatas([])
       axios.get(`http://localhost:3500/${Department}/patrimony/${Room}`)
      .then((response) => {
        SetDatas(response.data?.rooms[0].patrimonies)
        console.log(response.data)
  
      })

      
    }

  }
  useEffect(()=>{
    setTheme(states.NavData.value.theme);
  filterResult();
  },[Filter])

  return (
    <>
      <Title title="Tabela de Patrimônios"/>
      <div className="containerUp" >
        <div className="row">
          <table>
            {/* <thead>
              <tr>
                <td>
                  <text className="textclass">Filter</text>
                </td>
              </tr>
            </thead> */}
            <tbody>
              
              <div className="col">
                <text className="textclass">Filtro</text>

                <button className="checkbtn" onClick={() => SetFilter("all")}>
                  All
                </button>
                <button
                  className="checkbtn"
                  onClick={() => SetFilter("cadeira")}
                >
                  Cadeira
                </button>
                <button className="checkbtn" onClick={() => SetFilter("projetor")}>
                  Projetor 
                </button>
                <button
                  className="checkbtn"
                  onClick={() => SetFilter("computador")}
                >
                  Computador
                </button>
                <button
                  className="checkbtn"
                  onClick={() => SetFilter("televisao")}
                >
                  Televisão
                </button>
                <button
                  className="checkbtn"
                  onClick={() => SetFilter("mesa")}
                >
                  Mesa
                </button>
              </div>
            </tbody>
          </table>
        </div>
        <div className="tableContainer">
          <button className="btn-add-patrimonio">
            <NewPatrimonioModal theme={theme}/>
          </button>

          <div className="subContainer">
            <table className="table">
              <thead className="thead">
                <tr>
                  <td></td>
                  <td>N° de identificação</td>
                  <td>Nome/modelo</td>
                  <td>Situação</td>
                  <td>Valor</td>
                 
                </tr>
              </thead>

              {data.map((index) => {
                return (
                  <tbody>
                    <tr>
                    <td >
                        <div>  
                          <button onClick={()=>{dispatch({type:'ADD_VALUE',data:{nPatrimony:index?.nPatrimony,image:index?.image}})}}>
                            <ModalInfo theme={theme} />
                            </button>
                        </div>
                      </td>
                      <td >
                        <div>
                          <div>
                            <p className="id-object">{index?.nPatrimony}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span >{index?.type}</span>
                      </td>
                      <td>
                        <span>{index?.status}</span>
                      </td>
                      <td >
                        <span >{index?.value}</span>
                      </td>
                     
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>

          <div className="tabbleFooter">
            <div className="pagination"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tables;
