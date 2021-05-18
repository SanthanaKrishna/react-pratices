import React from 'react'
import Modal from 'react-modal';

Modal.setAppElement('#root');
export const Modal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div>
            <button onClick={() => setModalIsOpen(!modalIsOpen)}>x</button>
            <Modal isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={
                    {
                        overlay: { backgroundColor: 'grey' },
                        content: { color: 'orange' }
                    }
                }
            >
                <h2>Modal Title</h2>
                <p>Modal Body</p>
            </Modal>
        </div>
    )
}
