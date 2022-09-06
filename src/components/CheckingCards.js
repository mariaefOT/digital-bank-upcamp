import React, {useEffect, useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";

import Cards from "./Cards"

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
                <Col key={item.accountNumber}>
                    <Cards item={item}/>
                </Col>
            );
        });
        return mappedItems;
    }

    if(account.length === 0) {
        return (
            <div>
                <span>
                    No accounts available
                </span>
            </div>
        )
    } else {
        return (
            <div>
                <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    {getItems()}
                </Row>
            </div>
        )
    };
};

export default CheckingCards;