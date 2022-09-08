import {Row, Col} from 'react-bootstrap'

import AccountCard from "./AccountCard"

const CheckingCards = (props) => {

    if(props.accounts.length === 0) {
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
                    {props.accounts.map(item => {
                        return(
                            <Col key={item.accountNumber}>
                                <AccountCard item={item}/>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        );
    };
};

export default CheckingCards;