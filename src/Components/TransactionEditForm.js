import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function TransactionEditForm() {
  let { index } = useParams();
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    date: "",
    itemName: "",
    amount: 0,
    from: "",
    category: "",
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleNumberChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value});
  };
 
  const handleSelectChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value});
  };

  useEffect(() => {
    axios.get(`${API}/transactions/${index}`)
      .then(response => setTransaction(response.data))
      .catch(error => console.error(error))
  }, []);

  const updateTransaction = () => {
    axios.put(`${API}/transactions/${index}`, transaction) 
      .then(response => {
        setTransaction(response.data)
        navigate(`/transactions/${index}`)
      })
      .catch(error => console.error(error))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTransaction();
  };

  return (
    <div className="container mb-3 ">
      <form onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="date">Date:</label>
        <input
          className="form-control"
          id="date"
          type="text"
          name="date"
          value={transaction.date}
          placeholder="date"
          onChange={handleTextChange}
        />
        <br/>
        <label className="form-label" htmlFor="itemName"> Item Name:</label>
        <input
        className="form-control"
          id="itemName"
          value={transaction.itemName}
          type="text"
          onChange={handleTextChange}
          placeholder="Name"
          required
        />
        <br/>
        <label className="form-label" htmlFor="amount">Amount:</label>
        <input
        className="form-control"
          id="amount"
          type="number"
          value={transaction.amount}
          onChange={handleNumberChange}
          required
        />
        <br/>
        <label className="form-label" htmlFor="from">From:</label>
        <input
        className="form-control"
          id="from"
          type="text"
          onChange={handleTextChange}
          value={transaction.from}
        />
        <br/>
        <label className="form-label" htmlFor="category">Category:</label>
       <select className="form-select" id="category" value={transaction.category} onChange={handleSelectChange}>
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
        <input className="btn btn-primary" type="submit" />
      </form>
      <Link to={`/transactions/${index}`}>
        <br/>
        <button className="btn btn-secondary">Nevermind!</button>
      </Link>
    </div>
  );
}

export default TransactionEditForm;