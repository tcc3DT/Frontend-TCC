import * as React from 'react';
import Modal from 'react-modal';
import './modalInfo.css'
import {FaInfoCircle} from 'react-icons/fa'


// import item from '../../assets/chair.png'
// import view from '../../assets/view.png'

function ModalInfo(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="containerModal">

      <button onClick={openModal}>
        <FaInfoCircle size={20} id={props.theme}/>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <div className='headerModal'>
            <h1>Informaçoes do patrimônio</h1>
            <p>Neste modal você poderá fazer as seguintes alterações:</p>
        </div>
        
        <form>
            <div className='containerUpModal'>
                <div className='containerImage'>
                    {/* <img alt="item" id='item' src={item} /> */}
                </div>
                <div>
                    <div className='containerRight'>
                        
                            <label>Modelo</label>
                            <input id='modelo'/>
                        
                        <div className='containerInfo'>
                            <div>
                                <label>Situação</label>
                                <select>
                                    <option id='ativo'>
                                        Ativo
                                    </option>
                                    <option id='manutencao'>
                                        Manutenção
                                    </option>
                                    <option id='danificado'>
                                        Danificado
                                    </option>
                                    <option id='movido'>
                                        Movido
                                    </option>
                                </select>
                            </div>
                            <div>
                                <label>Código</label>
                                <input />
                            </div>
                        </div>
                        <div className='containerInfo'>

                            <div>
                                <label>N° de identificação</label>
                                <input />
                            </div>
                            <div>
                                <label>Valor</label>
                                <input />
                            </div>

                        </div>
                    </div>
                </div> 
            </div>


            <div className='containerButtons'>
                <button id='back'>Voltar</button>
                <button id='delete'> Excluir</button>
                <button id='edit'>Editar</button>
            </div>
        </form>
      </Modal>

    </div>
  );
}

export default ModalInfo;
