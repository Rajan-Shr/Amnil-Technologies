import { useState } from 'react';
import './App.css';
import GetName from './components/GetName';
import Modal from './components/Modal';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <GetName />
      <hr />
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default App
