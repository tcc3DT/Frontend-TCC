import * as React from "react";
import Users from "../Users";
import '../StylesUsers/tableUser.css'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import {FaInfoCircle} from 'react-icons/fa'
import ModalUser from "../../../Components/ModalUsers";
import axios from "axios";
import Title from "../../../Components/TitlePage";

export default function TableUser(){
    const [datas,Setdatas] = React.useState([])

    function GetData(){
        axios.get("http://localhost:3500/users")
        .then((response)=>{Setdatas(response.data)})
    }

    React.useEffect(()=>{
        GetData();
    },[])

    return(
        <>
            <Title title="Tabela de Usuários"/>

            <div className="containerUsersUp">
            <div className="tableUsersContainer">

            <div className="subContainerUsers">
                <table className="tableUsers">
                <thead className="theadUsers">
                    <tr>
                    <td>Email</td>
                    <td>Nome de Usuário</td>
                    <td>Cargo</td>
                    <td></td>
                    </tr>
                </thead>

                {datas.map((values) => {
                    console.log(values)
                    return (
                    <tbody>
                        <tr>
                        <td >
                            <div>
                            <div>
                                <p id="id-object">{values?.email}</p>
                            </div>
                            </div>
                        </td>
                        <td>
                            <span >{values?.name}</span>
                        </td>
                        <td>
                           {values?.office}
                        </td>
                        <td >
                            <div>
                                <button onClick={()=>{sessionStorage.setItem("Email",values?.email)}}>
                                    
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
               
                </div>
            </div>
            </div>
            </div>
        </>
    )
}