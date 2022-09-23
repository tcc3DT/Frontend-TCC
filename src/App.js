import * as React from 'react';
import Modal from 'react-modal';
import ModalInfo from './modals/info modal';
import NewPatrimonioModal from './modals/newpatrimoniomodal';
import './App.css'

Modal.setAppElement("#root");

function App() {
  return (
    <div className='App'>
      <ModalInfo/>
      <NewPatrimonioModal />
    </div>
  );
}

export default App;
