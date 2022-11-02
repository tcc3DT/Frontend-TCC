import React from "react";
import './styleSidebar.css';
import Perfil from '../../assets/perfil.png';
import { FiList } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { ImHome3 } from "react-icons/im";
import { Link } from "react-router-dom";

export default function Sidebar(props) {

    if (props.tema == 'dark') {
        var cor = "containerSidebar-dark"
        var corIcone = "white"
    } else {
        var cor = "containerSidebar-light"
        var corIcone = "white"
    }
    return (
        <div className={cor}>
            <div className="contentSidebar">
                <div className="containerSidebarPerfil">
                    <img src={Perfil} alt="" />
                    <div className="infosPerfilSidebar">
                        <h1 id="cargoSidebar">Administrador</h1>
                        <p id="nameSidebar">Geraldo Luiz</p>
                    </div>
                </div>

                <div className="containerSidebarButtons">

                    <Link to="/departments" id="linkSidebar">
                        <button>
                            <ImHome3 size={25} id="iconSidebar" color={corIcone}/>
                            <p className="dep">Departamentos</p>
                        </button>
                    </Link>

                    <Link to="/table" id="linkSidebar">
                        <button>
                            <FiList size={25} id="iconSidebar" color={corIcone} />
                            <p className="tab">Tabela de Itens</p>
                        </button>
                    </Link>


                    <Link to="/tableUsers" id="linkSidebar">
                        <button>
                            <FaUsers size={25} id="iconSidebar" color={corIcone} />
                            <p className="usu">Usuários</p>
                        </button>
                    </Link>


                    <Link to="/verifications" id="linkSidebar">
                        <button>
                            {/* <img src={PranchetaImg} id="icon-sidebar-buttons"/> */}
                            <p>Verifição</p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}