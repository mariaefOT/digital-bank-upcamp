import { editAccount, deleteAccount } from '../api/index';
import { Button, Modal, Card, ToastContainer, Toast } from 'react-bootstrap';
import { validateName } from '../validations/validateUpdateAccount';
import { useState } from 'react';

const AccountCard = (props) => {
    const [showDelete, setShowDelete] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [hideCard, setHideCard] = useState(true);

    const toggleShowAlert = () => setShowAlert(!showAlert);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

    const handleUpdate = (name) => {
        if (validateName(props.item.name,name)) {
            editAccount(props.item.id,name).then(() => {
                toggleShowAlert();
            });
        };
    };

    const handleDelete = () => {
        deleteAccount(props.item.id).then(() => {
            setShowDelete(false);
            setHideCard(false);
        });
    };

    return (
        <>
            {hideCard &&
            <Card bg="primary" text='light' className="text-start">
                <Card.Body>
                    <Card.Title id='editableName' contentEditable={true} onBlur={(ev) => {handleUpdate(ev.target.textContent)}}>{props.item.name}</Card.Title>
                    <Card.Text>
                        Account: {props.item.accountType.name} <br/>
                        Ownership: {props.item.ownershipType.name} <br/>
                        Account Number: {props.item.accountNumber} <br/>
                        Interest Rate: {props.item.accountType.interestRate}%
                    </Card.Text>
                    <Card.Title>Balance: $ {props.item.currentBalance}</Card.Title>
                </Card.Body>
                {props.isAdmin && 
                <Button variant="danger" id='btn-delete' type="button" className='btn-delete' onClick={() => {handleShowDelete()}}>
                    Delete
                </Button>}
            </Card>}
            
            <Modal show={showDelete} onHide={handleCloseDelete}>
                <Modal.Header closeButton>
                <Modal.Title>Delete Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete <b>{props.item.name}</b>?</Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={handleCloseDelete}>
                    Cancel
                </Button>
                <Button variant="success" onClick={() => {handleDelete()}}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer position='bottom-end'>
                <Toast show={showAlert} onClose={toggleShowAlert} delay={3000} autohide>
                    <Toast.Header>
                    <strong className="me-auto">Alert</strong>
                    </Toast.Header>
                    <Toast.Body>The modification has been saved</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    )
}

export default AccountCard;