import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from "axios";

const CheckingCards = () => {
    const [token, setToken] = useState([]);
    const [account, setAccount] = useState([]);
    
    const tokenAPI = () => {
        axios.post('http://localhost:8080/bank/api/v1/auth?password=Demo123!&username=jsmith@demo.io', {

        }).then(response => {
            setToken(response.data.authToken);
        }).catch(error => {
            console.log(error);
        })
    };
    
    const checkingAccountAPI = () => {
        axios.get('http://localhost:8080/bank/api/v1/user/account/checking', {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            setAccount(response.data);
        }).catch(error => {
            console.log(error);
        })
    };

    useEffect (() => {
        tokenAPI();
        checkingAccountAPI();
    },[token]);

    const getItems = () => {
        const mappedItems = account.map(item => {
            return (
                <Col>
                    <Card bg="primary" text='light' className="text-start">
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                Account: {item.accountType.name} <br/>
                                Ownership: {item.ownershipType.name} <br/>
                                Account Number: {item.accountNumber} <br/>
                                Interest Rate: {item.accountType.interestRate}%
                            </Card.Text>
                            <Card.Title>Balance: $ {item.currentBalance}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            );
        });
        return mappedItems;
    }

    return (
        <div>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {getItems()}
            </Row>
        </div>
    )
}

export default CheckingCards;