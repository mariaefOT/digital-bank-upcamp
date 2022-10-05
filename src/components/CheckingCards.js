import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import AccountCard from "./AccountCard";

const CheckingCards = (props) => {
    const {accounts} = useSelector(state => state.accounts);

    if(accounts.length === 0) {
        return (
            <div>
                <span>
                    No accounts available
                </span>
            </div>
        )
    } else {
        return (
            <div className='cards'>
                <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    {accounts.map(item => {
                        return(
                            <Col key={item.accountNumber}>
                                <AccountCard item={item} isAdmin={props.isAdmin}/>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        );
    };
};

export default CheckingCards;