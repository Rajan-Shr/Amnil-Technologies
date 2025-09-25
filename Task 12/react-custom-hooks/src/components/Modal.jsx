import ReactDOM from 'react-dom';
import './Modal.css'; 

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-body" >
      <div className="modal-content">
        <h2>Modal Title</h2>
        <p>This is the modal content.</p>
        <button className='btn' onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById('modal-root') 
  );
};

export default Modal;
