import Transaction from "../components/Transaction";

const WithdrawalsView = () => {
    return(
        <div>
            <h1 className="Title" >Withdrawals</h1>
            <Transaction type={'WTH'}/>
        </div>
    )
}

export default WithdrawalsView;