import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;
console.log(API);

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => setTransactions(response.data))
      .catch((e) => console.error(e));
  }, []);
  const totalBalance = () => {
    let total = 0;
    transactions.map((transaction) => {
    return total += Number(transaction.amount);
    });
    return total;
  };
  return (
    <div className="Transactions">
      <h3>Bank Account Total: {totalBalance()} </h3>
      <section>
        <table className="table table-striped table-hover text-center">
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              return (
                <Transaction
                  key={index}
                  transaction={transaction}
                  index={index}
                />
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Transactions;

