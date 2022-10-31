import * as React from 'react';
import Modal from 'react-modal';
import {FaPlus} from 'react-icons/fa'
import './newpatrimonio.css'

function NewPatrimonioModal(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  if(props.tema == 'dark'){
    var cor = 'white'
  }
  else{
    var cor = '#292929'
  }

  return (
    <div className="container-new-modal">
      <button onClick={openModal}>
        <FaPlus size={25} color={cor}/>
            {/* <span className="tooltiptext">Adicionar item</span> */}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modalContentPatrimonio"
        overlayClassName="modal-overlay"
      >
        <div className='title'>
           <h1 id='title-modal'>Cadastrar novo patrimônio</h1>
           <p id='info-modal'>Neste modal você poderá fazer as seguintes alterações:</p>
        </div>

        <div className='containerOne'>
            <div>
                <label>Situação</label>
                <select id='selectSituation'>
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

        <div className='containerTwo'>
                
                <label>Modelo</label>
                <input />
                
                <label>Responsável</label>
                <input />

                <label>Localização</label>
                <select>
                    <option>
                        Salas
                    </option>
                    <option>
                        Laboratórios
                    </option>
                    <option>
                        Oficinas
                    </option>
                    <option >
                        Bibliotecas
                    </option>
                    <option >
                        Refeitório
                    </option>
                </select>
          
        </div>
        
        <div className='containerThree'>
            <div>
                <label>N° de identificação</label>
                <input />
            </div>
            <div>
                <label>Data de aquisição</label>
                <input />
            </div>
            <div>
                <label>Valor</label>
                <input />
            </div>
        </div>

        <div className='addImage'>
            <button>
                +
            </button>
            <p>Adicionar imagem</p>
        </div>

        <div className='containerButton'>
            <button id='delete'> Excluir</button>
            <button id='new'>Cadastrar patrimonio</button>
        </div>
      </Modal>

    </div>
  );
}

export default NewPatrimonioModal;