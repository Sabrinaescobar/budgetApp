import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL

function TransactionNewForm() {
  const [transaction, setTransaction] = useState({
    date: "",
    itemName: "",
    amount: 0,
    from: "",
    category: "",
  });
 
  const navigate = useNavigate();
  
  const addTransaction = () => {
    axios.post(`${API}/transactions`, transaction)
      .then(response => navigate(`/transactions`)) // happy path! only happens if above request worked
      .catch(error => console.error(error)) // bad path! happens when our request fails!
  };

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleNumberChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSelectChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction();
  };
  
  
  return (
    <div className="container mb-3 ">
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="date">Date:</label>
        <input
          className="form-control"
          id="date"
          value={transaction.date}
          type="text"
          onChange={handleTextChange}
          placeholder="date"
          required
        />
        <br/>
        <label className="form-label" htmlFor="itemName">Name:</label>
        <input
        className="form-control"
          id="itemName"
          type="text"
          onChange={handleTextChange}
          placeholder="name"
          value={transaction.itemName}
        />
        <br/>
        <label className="form-label" htmlFor="amount">Amount:</label>
        <input
        className="form-control"
          id="amount"
          type="number"
          name="amount"
          value={transaction.amount}
          placeholder="amount"
          onChange={handleNumberChange}
        />
        <br/>
        <label className="form-label" htmlFor="from">From:</label>
        <input
        className="form-control"
          id="from"
          type="text"
          placeholder="from"
          onChange={handleTextChange}
          value={transaction.from}
        />
        <br/>
       <label className="form-label" htmlFor="category">Category:</label>
       <select className="form-select" id="category"  onChange={handleSelectChange}>
       <option value="income">Income</option>
       <option value="food">Food</option>
       <option value="groceries">Groceries</option>
       <option value="garden">Garden</option>
       <option value="toys">Toys</option>
       <option value="furniture">Furniture</option>
       <option value="cleaning">Cleaning</option>
       <option value="accesories">Accesories</option>
       </select>
        <br />
        <input className="btn btn-primary" type="submit" value={"CREATE NEW ITEM"}/>
      </form>
    </div>
  );
}

export default TransactionNewForm;