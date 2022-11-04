import React, { useState } from "react";
import "../StylesTable/table.css";
import NewPatrimonioModal from '../../../Components/newpatrimoniomodal';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import StyledCheckbox from "../StyledCheckbox";

function Tables() {
  const [data, setData] = useState([{number:0, name:"Teste", local:"Teste", situation:"teste", checked:true}]);

  return (
      <div className="containerUp">
        <div className="tableContainer">
          <button className="btn-add-patrimonio">
            <NewPatrimonioModal/>
          </button>
          <div className="subContainer">
            <table>
              <thead>
                <tr>
                  <td></td>
                  <td>N° de identificação</td>
                  <td>Nome/modelo</td>
                  <td>Local</td>
                  <td>Situação</td>
                </tr>
              </thead>
              <tbody>
                {data.map(({ id, name, local, situacao, checked }) => {
                  return (
                    <tr>
                      <td>
                        <button>    
                          <StyledCheckbox checked={checked}/>
                        </button>
                      </td>
                      <td>
                        <div>
                          <div>
                            <p className="id-object">{id}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span>{name}</span>
                      </td>
                      <td>
                        <span>{local}</span>
                      </td>
                      <td>
                        <span >{situacao}</span>
                      </td> 
                    </tr>
                  );
                })}
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
  );
}

export default Tables;
