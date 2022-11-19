import React from "react";
import './styleSidebar.css';
import Perfil from '../../assets/perfil.png';
import { FiList } from "react-icons/fi";
import { FaUsers, FaClipboardCheck, FaUserCheck } from "react-icons/fa";
import { ImHome3 } from "react-icons/im";
import { Link } from "react-router-dom";

export default function Sidebar() {

    return (
        <div className="containerSidebar">
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
                            <ImHome3 size={25} id="iconSidebar"/>
                            <p className="dep">Departamentos</p>
                        </button>
                    </Link>

                    <Link to="/table" id="linkSidebar">
                        <button>
                            <FiList size={25} id="iconSidebar"/>
                            <p className="tab">Tabela de patrimônios</p>
                        </button>
                    </Link>
                    
                    <Link to="/verificacaopatrimonio" id="linkSidebar">
                        <button>
                            <FaClipboardCheck size={25} id="iconSidebar"/>
                            <p className="usu">Verificação  de patrimônio</p>
                        </button>
                    </Link>

                    <Link to="/tableUsers" id="linkSidebar">
                        <button>
                            <FaUsers size={25} id="iconSidebar"/>
                            <p className="usu">Usuários</p>
                        </button>
                    </Link>

                    <Link to="/verifications" id="linkSidebar">
                        <button>
                            <FaUserCheck size={25} id="iconSidebar"/>
                            <p>Verifição de usuários</p>
                        </button>
                    </Link>

                    

                </div>
            </div>
        </div>
    )
}