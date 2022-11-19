import React, { useState, useEffect} from "react";
import "../Styles/table.css";
import ModalInfo from "../../../Components/ModalInfo";
import NewPatrimonioModal from '../../../Components/newpatrimoniomodal';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import axios from 'axios'
import Categories from "./Categories";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Tables() {
  const [data, SetDatas] = useState(Categories);
  const [Filter, SetFilter] = useState([]);
  const states = useSelector((states)=>states);    
  var patrimonys = [];
  const dispatch = useDispatch();
  const Room = sessionStorage.getItem("room")
  const Department = sessionStorage.getItem("department")
  
 
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
      console.log(Department)
      SetDatas([])
       axios.get(`http://localhost:3500/${Department}/patrimony/${Room}`)
      .then((response) => {
        SetDatas(response.data?.rooms[0].patrimonies)
        console.log(response.data)
      })
    }
  }
  useEffect(()=>{
  filterResult();
  },[states.NavData])

  return (
    <>
      <div className="containerUp">
      {/* <div className="containerUp">
        <div className="row">
          <table>
            <thead>
              <tr>
                <td>
                  <text className="textclass">Filter</text>
                </td>
              </tr>
            </thead>
            <tbody>
              <div className="col">
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
        </div>  */}
        <div className="tableContainer">
          <button className="btn-add-patrimonio">
            <NewPatrimonioModal/>
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
                            <ModalInfo/>
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
      </div>
    </>
  );
}

export default Tables;
