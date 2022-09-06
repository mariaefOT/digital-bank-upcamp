import Card from 'react-bootstrap/Card';

const Cards = (props) => {
    return (
        <Card bg="primary" text='light' className="text-start">
            <Card.Body>
                <Card.Title>{props.item.name}</Card.Title>
                <Card.Text>
                    Account: {props.item.accountType.name} <br/>
                    Ownership: {props.item.ownershipType.name} <br/>
                    Account Number: {props.item.accountNumber} <br/>
                    Interest Rate: {props.item.accountType.interestRate}%
                </Card.Text>
                <Card.Title>Balance: $ {props.item.currentBalance}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default Cards;