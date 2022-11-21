import './style.css';
import { useState,useEffect } from "react";
import Modal from "react-modal";
import axios from 'axios'
Modal.setAppElement("#root")

function ModalDeparmento(props) {

  const [modalIsOpen, setIsOpen ] = useState(false);
  const [modalCreateDeparment, setModalCreateDeparment] = useState(false);
  const [Items,SetItems] = useState();
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(()=>{
    axios.get("http://localhost:3500/count/patrimonys")
    .then((response)=>{SetItems(response.data)})
  })
  function modalCriarDeparment(){
   
    return(
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="exemplo"
      overlayClassName="modal-overlay-dep"
      className="modal-content-dep">
        
        <h1 className="titulo">Criar Departamento</h1>
        <div className='container-info-novo'>
          <div className='container-nome-novo'>
            <label>Nome do departamento</label>
            <input className="input-nome-novo"></input>
          </div>
          <div className='container-identificacao-novo'>
            <label>N° de identificação</label>
            <input className="input-ident-novo"></input>
          </div>
        </div>
        <div className='container-button'>
          <button onClick={() => {}} className='btn-cadastrar'>criar</button>
          <button onClick={()=>setModalCreateDeparment(false)} className='btn-voltar'>voltar</button>
        </div>
      </Modal>);
    };

  return (
    <div className='container'>
      <div className='container-etiquetas'>
        <div className='card-total-itens'>
            <h1>Total de itens</h1>
            <p>{Items}</p>
        </div>
      <button className="btn-ver" onClick={openModal}>
        <img src='../assets/cadastro.png' alt='' className='icon-cadastro'/>
        cadastrar item
      </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="exemplo"
        overlayClassName="modal-overlay-dep"
        className="modal-content-dep">
          <h1 className="titulo">Cadastrar novo departamento</h1>

          <div className='container-menu'>
            <label>Departamento</label>
            <select className="select">
              <option>Sala</option>
              <option>Laboratório</option>
              <option>Oficina</option>
              <option>Biblioteca</option>
              <option>Refeiório</option>
            </select>
            <p href='#' className='link-criar' onClick={()=>{
              setModalCreateDeparment(true);
            }}>criar departamento</p>
          </div>

          <div className='container-info-cad'>
            <div className='container-nome'>
              <label>Responsável</label>
              <input className="input-nome"></input>
            </div>
            <div className='container-identificacao'>
              <label>N° de identificação</label>
              <input className="input-ident"></input>
            </div>
          </div>

          <div className='container-button'>
            <button onClick={() => {}} className='btn-cadastrar'>Cadastrar</button>
            <button onClick={closeModal} className='btn-voltar'>voltar</button>
          </div>
        </Modal>
        {modalCreateDeparment && modalCriarDeparment()}
    </div>
  );
}

export default ModalDeparmento;

