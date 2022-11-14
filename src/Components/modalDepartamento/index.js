import './style.css';
import { useState } from "react";
import Modal from "react-modal";
import axios from 'axios';

Modal.setAppElement("#root")

function ModalDeparmento({setNewDep, newDep, deps, token }) {
  const [modalIsOpen, setModalIsOpen ] = useState({status:false, content:"department"});
  const [Department,SetDepartment] = useState([]);
  const [status, setStatus] = useState({type:"", msg:""});
  const [room, setRoom] = useState({department:"", nRoom:""});
  

  function CreateDepartment(){
    axios.post("http://localhost:3500/department",Department)
    .then(({data:{status, msg}})=>{
      setStatus({type:status, msg})
      if(status === "success"){
        setNewDep(!newDep);
        setModalIsOpen(false)
      }
    })
  }

  function CreateRoom(){
    axios.post("https://localhost:3500/rooms", room,{headers:token})
    .then(()=>{})
  }

  function NewDepartment(){
    return(
    <>
      <div className="container-info">
        <h1>Cadastrar novo departamento</h1>
        <button onClick={()=>setModalIsOpen({...modalIsOpen, content:"room"})} className="btn-cadastrar">+ Sala</button>
      </div>
      <div className='container-info'>
        <div className='container-identificacao'>
          <label htmlFor="identificacao">Nome do Departamento</label>
          <input id="identificacao" className='input-identificacao' onChange={(e)=>{SetDepartment({...Department, name:e.target.value})}}></input>
          {status.msg &&
            <div className="container-info">
              <p className={status.type === "error"?"error":"success"}></p>
            </div>
          }
        </div>
      </div>
      <div className='container-button'>
        <button onClick={()=>setModalIsOpen({...modalIsOpen, status:false})} className='btn-voltar'>voltar</button>
        <button onClick={()=>CreateDepartment()} className='btn-cadastrar'>Cadastrar</button>
      </div>
    </>
    )
  }

  function NewRoom(){
    return(
      <>
        <div className="container-info">
          <h1>Cadastrar nova sala</h1>
          <button onClick={()=>setModalIsOpen({...modalIsOpen, content:"department"})} className="btn-cadastrar">+ Departamento</button>
        </div>
        <div className="container-info col">
          <div>
            <label htmlFor="select-department" className={room.department === "" && "txtRed"}>Departamento</label>
            <select id="select-department" onChange={(e)=>setRoom({...room, department:e.target.value})}>
              {deps.map(({id, name})=>(<option value={id} key={id}>{name}</option>))}
            </select>
          </div>
          <div>
            <label htmlFor="nRoom" className={room.nRoom === "" && "txtRed"}>Nº da Sala</label>
            <input id="nRoom" value={room.nRoom} onChange={(e)=>setRoom({...room, nRoom:e.target.value})} className="input-room" type="text"/>
          </div>
        </div>
        <div className='container-button'>
          <button onClick={()=>setModalIsOpen({...modalIsOpen, status:false})} className='btn-voltar'>voltar</button>
          <button onClick={()=>CreateRoom()} className='btn-cadastrar'>Cadastrar</button>
        </div>
      </>
    )
  }

  return (
    <div className='container-modal-departamento'>
      <div className='container-etiquetas'>
        <div className='card-total-itens'>  
            <h1>Total de itens</h1>
            <p>4.669</p>
        </div>
      <button className="btn-ver" onClick={()=>setModalIsOpen({...modalIsOpen, status:true})}>
        <img src='../assets/cadastro.png' alt='' className='icon-cadastro'/>
        cadastrar item
      </button>
      </div>
      <Modal
        isOpen={modalIsOpen.status}
        onRequestClose={()=>setModalIsOpen({...modalIsOpen, status:false})}
        contentLabel="exemplo"
        overlayClassName="modal-overlay"
        className="modal-content">
          {modalIsOpen.content === "department"? NewDepartment(): NewRoom()}
      </Modal>
    </div>
  );
}

export default ModalDeparmento;

