import Transaction from "../components/Transaction";

const DepositsView = () => {
    return(
        <div>
            <h1 className="Title" >Deposits</h1>
            <Transaction type={'deposit'}/>
        </div>
    )
}

export default DepositsView;