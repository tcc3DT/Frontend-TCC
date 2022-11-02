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
  function openModal() {
    setIsOpen(true);
  }
  async function GetPatrimony(){
    const datas ={
        room:1,
        department:1
    }
    await axios.get("http://localhost:3500/patrimony",datas)
    .then((response)=>{console.log(response.data)})
  }

  function closeModal() {
    setIsOpen(false);
  }
async function NewPatrimony(){
  console.log(Data)
  await axios.post(`http://localhost:3500/insertPatrimony/${Data.room}`,Data)
  .then((response)=>{alert("Patrimônio Criado!")})
  .catch((err)=>{
      console.log(err)
      alert("Falha ao criar o patrimônio")
  })

}
React.useEffect(()=>{
  GetPatrimony();
},[])
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
          <select onChange={(value)=>{SetData({...Data,type:value.target.value})}}>
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
        <label>Responsável </label>
        <input onChange={(value)=>{SetData({...Data,room:value.target.value})}}/>
        <label>Localização </label>
        <input onChange={(value)=>{SetData({...Data,room:value.target.value})}}/>
        <label>N° de identificação</label>
        <input onChange={(value)=>{SetData({...Data,codePatrimony:value.target.value})}} />
      </div>

      <div className='containerThree'>
        <div>
            <label>Data de aquisição</label>
            <input onChange={(value)=>{SetData({...Data,codePatrimony:value.target.value})}} />
        </div>
        <div>
            <label>Valor</label>
            <input onChange={(value)=>{SetData({...Data,valuePatrimony:value.target.value})}}/>
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