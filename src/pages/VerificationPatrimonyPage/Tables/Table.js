import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSelector } from "react-redux";
import FilterTable from '../../../Components/FilterTable';
import NewPatrimonioModal from '../../../Components/newpatrimoniomodal';
import "../Styles/table.css";

function Tables() {
  const [data, setData] = useState();
  const states = useSelector((states)=>states);    
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  
  useEffect(()=>{
    setTheme(states.NavData.value.theme);
  },[states.NavData])
  
  return (
    <>
      <div className="containerUp" data-theme={theme}>
        <FilterTable />
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
                  <td>Local</td>
                  <td>Situação</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <button>    
                      {/* CheckBox */}
                    </button>
                  </td>
                  <td>
                    <p className="id-object">0</p>
                  </td>
                  <td>
                    <span>Teste</span>
                  </td>
                  <td>
                    <span>Teste</span>
                  </td>
                  <td >
                    <span>Teste</span>
                  </td> 
                </tr>
              </tbody>
            </table>
          </div>
          <div className="tabbleFooter">
            <div className="pagination">
              <span>mostrando 1 - 10 de 45</span>
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
