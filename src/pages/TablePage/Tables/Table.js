import React, { useState} from "react";
import useLocalStorage from "use-local-storage";
import "../Styles/table.css";
import ModalInfo from "../../../Components/ModalInfo";
import NewPatrimonioModal from '../../../Components/newpatrimoniomodal';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import {BsSunFill, BsFillMoonFill} from 'react-icons/bs';

import Categories from "./Categories";
import SwitchComp from "../../../Components/Switch";

function Tables() {

  const [data, setData] = useState(Categories);

  const filterResult = (catItem) => {
    const result = Categories.filter((curDate) => {
      return curDate.name === catItem;
    });
    setData(result);
  };

  const [theme, setTheme] = useState("light")

  const toggleTheme = () =>{
      setTheme((curr) => (curr === "light" ? "dark" : "light"))
      
  }


  return (
    <>
      <div className="containerUp" data-theme={theme}>
          <SwitchComp 
            theme= {toggleTheme} 
            dark= {theme}
          />
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

              {data.map((values) => {
                const { id, name, local, situacao } = values;
                return (
                  <tbody>
                    <tr>
                    <td >
                        <div>  
                            <ModalInfo theme={theme}/>
                        </div>
                      </td>
                      <td >
                        <div>
                          <div>
                            <p className="id-object">{id}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span >{name}</span>
                      </td>
                      <td>
                        <span>{local}</span>
                      </td>
                      <td >
                        <span >{situacao}</span>
                      </td>
                     
                    </tr>
                  </tbody>
                );
              })}
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
