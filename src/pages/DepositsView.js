import Transaction from "../components/Transaction";

const DepositsView = () => {
    return(
        <div>
            <h1 className="Title" >Deposits</h1>
            <Transaction type={'DPT'}/>
        </div>
    )
}

export default DepositsView;