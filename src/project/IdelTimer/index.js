import React, { useRef, useState } from 'react'
import IdleTimer from 'react-idle-timer';
import Modal from 'react-modal';

export const IdleTimerCounter = () => {
    const idelTimerRef = useRef(null);
    const sessionTimeoutRef = useRef(null);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);

    const onIdle = () => {
        setModalOpen(true)
        sessionTimeoutRef.current = setTimeout(logout, 5000)
    }

    const logout = () => {
        setModalOpen(false);
        setIsLoggedIn(false);
        clearTimeout(sessionTimeoutRef.current)
    }
    const stayActive = () => {
        setModalOpen(false);
        clearTimeout(sessionTimeoutRef.current)
    }

    return (
        <div>
            {
                isLoggedIn ? <h2>Welcome Krishna</h2> : <h2>Hello Guest</h2>
            }
            <Modal isOpen={modalIsOpen}>
                <h2>You'we been idle for a while!</h2>
                <p>you will be log out soon</p>
                <button onClick={logout}>Log me out</button>
                <button onClick={stayActive}>Keep me signed</button>

            </Modal>
            <IdleTimer
                ref={IdleTimerRef}
                timeout={5 * 1000}
                onIdle={onIdle}
            ></IdleTimer>
        </div>
    )
}
