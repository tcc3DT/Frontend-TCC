import * as React from "react";
import Users from "../Users";
import '../StylesUsers/tableUser.css'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import {FaInfoCircle} from 'react-icons/fa'
import ModalUser from "../../../Components/ModalUsers";

export default function TableUser(){
    const [data, setData] = React.useState(Users);

    return(
        <>
            <div className="containerUsersUp">
            <div className="tableUsersContainer">

            <div className="subContainerUsers">
                <table className="tableUsers">
                <thead className="theadUsers">
                    <tr>
                    <td>Email</td>
                    <td>Nome de Usuário</td>
                    <td>Local</td>
                    <td></td>
                    </tr>
                </thead>

                {data.map((values) => {
                    const { email, name, local } = values;
                    return (
                    <tbody>
                        <tr>
                        <td >
                            <div>
                            <div>
                                <p id="id-object">{email}</p>
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
                            <div>
                                <button >
                                    
                                    <ModalUser />
                                </button>
                            </div>
                        </td>
                        </tr>
                    </tbody>
                    );
                })}
                </table>
            </div>

            <div className="tableUsersFooter">
                <div className="paginationUsers">
                <nav>
                    <ul>
                    <li className="arrowsUsers">
                        <FaChevronLeft size={20} />
                    </li>
                    <li className="numberSelectedUsers">1</li>
                    <li className="numberUsers">2</li>
                    <li className="numberUsers">3</li>
                    <li className="numberUsers">4</li>
                    <li className="numberUsers">5</li>
                    <li className="arrowsUsers">
                        <FaChevronRight size={20} />
                    </li>
                    </ul>
                </nav>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}