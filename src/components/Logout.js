import { useNavigate } from "react-router-dom";
import { Button, Modal } from 'react-bootstrap';
import { useState } from "react";

const Logout = () => {
    let navigate = useNavigate();  
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const handleLogout = () =>{
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('role'); 
        navigate('/'); 
    }  

    return(
        <>
            <Button type="button" variant="danger" id='btn-logout' className='btn-logout' onClick={() => {handleShowModal()}}>
                LOGOUT
            </Button>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                <Modal.Title>Logout</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you really want to log out?</Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={handleCloseModal}>
                    No
                </Button>
                <Button variant="success" onClick={() => {handleLogout()}}>
                    Yes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Logout;