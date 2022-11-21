import * as React from 'react';
import Modal from 'react-modal';
import {FaPlus} from 'react-icons/fa'
import './newpatrimonio.css'
import axios  from 'axios';

function NewPatrimonioModal(props) {

  if (props.tema == 'dark') {
    var cor = "modalContentPatrimonio-dark"
   
  } else {
    var cor = "modalContentPatrimonio-light"
  }

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const[Data,SetData] = React.useState([])
  const token = sessionStorage.getItem("token")
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
async function NewPatrimony(){
  
  await axios.post(`http://localhost:3500/insertPatrimony`,Data,{headers:{"x-access-token":token}})
  .then((response)=>{alert("Patrimônio Criado!")})
  .catch((err)=>{
      alert("Falha ao criar o patrimônio")
  })

}
return (
  <div className="container-new-modal">
    <button onClick={openModal}>
        <FaPlus size={25} id={props.theme}/>
    </button>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      // className={cor}
      className="modalContentPatrimonio-light"
      overlayClassName="modal-overlay">

      <div className='title'>
         <h1>Cadastrar novo patrimônio</h1>
         <p id='info-modal'>Neste modal você poderá fazer as seguintes alterações:</p>
      </div>

      <div className='containerOne'>
          <div>
              <label>Situação</label>
              <select id='selectSituation' onChange={(value)=>{SetData({...Data,situation:value.target.value})}}>
                  <option id='ativo' value="ativo">
                      Ativo
                  </option>
                  <option id='manutencao' value="manutencao">
                      Manutenção
                  </option>
                  <option id='danificado' value="danificado">
                      Danificado
                  </option>
                  <option id='movido' value="movido">
                      Movido
                  </option>
              </select>
          </div> 
      </div>

      <div className='containerTwo'>
        <label>Modelo</label>
          <select onChange={(value)=>{SetData({...Data,type:value.target.value})}} defaultChecked="cadeira">
              <option value="cadeira">
                  Cadeira
              </option>
              <option value="projetor">
                  Projetor
              </option>
              <option value="computador">
                  Computador
              </option>
              <option value="televisao">
                  Televisão
              </option>
          </select>
          <label>Departamento</label>
          <select onChange={(value)=>{SetData({...Data,department:value.target.value})}}>
              <option value="sala">
                Sala
              </option>
              <option value="oficina">
                oficina
              </option>
              <option value="laboratorio">
                 Laboratorio
              </option>
          </select>
          
        <label>N° da sala </label>
        <input   value={Data.room} onChange={(value)=>{SetData({...Data,room:value.target.value})}} />
      </div>

      <div className='containerThree'>
      <div>
            <label>N° de identificação</label>
            <input  value={Data.codePatrimony} onChange={(value)=>{SetData({...Data,codePatrimony:value.target.value})}}/>
        </div>
        <div>
            <label>Valor</label>
            <input  value={Data.valuePatrimony} onChange={(value)=>{SetData({...Data,valuePatrimony:value.target.value})}}/>
        </div>
      </div>
      <div className='containerButton'>
          <button id='new' onClick={()=>NewPatrimony()}>Cadastrar patrimonio</button>
      </div>
    </Modal>
  </div>
);
}

export default NewPatrimonioModal;