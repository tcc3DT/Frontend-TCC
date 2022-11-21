import * as React from "react";
import "../StylesVerification/tableVerification.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import {
  FaRegCheckCircle,
  FaTimesCircle,
  FaInfoCircle,
  FaUserAlt,
  FaCheck,
} from "react-icons/fa";
import "./Modalstyle.css";
import { useNavigate } from "react-router-dom";
import Title from "../../../Components/TitlePage";

export default function TableVerification() {
  const [apiData, setApiData] = useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [Data, SetData] = useState([]);
  const token = sessionStorage.getItem("token")
  const navigate = useNavigate();
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
      axios.get("http://localhost:3500/requests",{headers:{"x-access-token":token}})
      .then((res)=>{setApiData(res.data.resFind);})
      .catch((err)=>{
        alert("Não possui permissão para acessar essa pagina")
        navigate("/")})
  }, []);

  function handlerSubmit() {
    axios
      .post("http://localhost:3500/user/register", Data)
      .then((response) => {
         alert(response.data)
      })
      .catch((err) => alert("Falha ao inserir usuário"));
  }

  function handlerDelete() {
    axios
      .delete(`http://localhost:3500/request/${Data?.email}`)
      .then((response) => {
        alert(response.data)
      })
      .catch((err) => console.log(err));
  }

  function GetUser(value) {
    openModal();
    axios
      .get(`http://localhost:3500/request/user/${value}`)
      .then((response) => {
        SetData(response.data);
        console.log(Data)
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(Data);
  }

  return (
    <>
    <Title title="Verificação de Usuários"/>
      <div className="containerVerificationUp">
        <div className="tableVerificationContainer">
          <div className="subContainerVerification">
            <table className="tableVerification">
              <thead className="theadVerification">
                <tr>
                  <td>Email</td>
                  <td>Email</td>
                  <td>Data de requisição</td>
                  <td></td>
                </tr>
              </thead>

              {apiData.map((values) => {
                const { email, name, createdAt } = values;
                return (
                  <tbody>
                    <tr>
                      <td>
                        <div>
                          <div>
                            <p id="id-object">{email}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span>{name}</span>
                      </td>
                      <td>
                        <span>{createdAt}</span>
                      </td>
                      <td>
                        <div>
                          <button>
                            <div>
                              <button onClick={() => GetUser(values?.id)}>
                                <FaCheck size={20} color="#33F46F" />
                              </button>
                              <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                contentLabel="exemplo"
                                overlayClassName="modal-overlay"
                                className="modal-verification-content"
                              >
                                <div className="containerInfoVerification">
                                  <div>
                                    <p>
                                      Deseja permitir o acesso desse usuário?
                                    </p>
                                  </div>

                                  <div className="containerButtonsModalVerification">
                                    <div className="containerInputModalVerification">
                                      <input
                                        className="InputModalVerification"
                                        placeholder="Email"
                                        value={Data?.email}
                                      />
                                    </div>
                                    <div className="containerInputModalVerification">
                                      <input
                                        className="InputModalVerification"
                                        placeholder="Nome"
                                        value={Data?.name}
                                      />
                                    </div>
                                    <div className="containerInputModalVerification">
                                      <input
                                        className="InputModalVerification"
                                        placeholder="CPF"
                                        value={Data?.cpf}
                                      />
                                    </div>
                                    <div className="containerInputModalVerification">
                                      <input
                                        className="InputModalVerification"
                                        placeholder="Cargo"
                                        value={Data?.office}
                                      />
                                    </div>
                                    <div>
                                      <label>Sim</label>
                                      <button>
                                        <FaRegCheckCircle
                                          size={20}
                                          color="#33F46F"
                                          onClick={() => handlerSubmit()}
                                        />
                                      </button>
                                    </div>
                                    <div>
                                      <label>Não Permitir</label>
                                      <button>
                                        <FaTimesCircle
                                          size={20}
                                          color="red"
                                          onClick={() => handlerDelete()}
                                        />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </Modal>
                            </div>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
