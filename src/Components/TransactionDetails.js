import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function TransactionDetails() {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({});
  let { index } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => setTransaction(response.data))
      .catch((error) => navigate(`/404`));
       // eslint-disable-next-line
  }, [index]);

  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then((response) => navigate(`/transactions`))
      .catch((error) => console.error(error));
  };

  return (
    <article className="container container-fluid">
      <h5>
        <strong>Date: </strong>
        {transaction.date}
      </h5>
      <h5>
        <strong>Name: </strong>
        {transaction.itemName}
      </h5>
      <h5>
        <strong>Amount: </strong>
        {transaction.amount}
        <br />
      </h5>
      <h5>
        <strong>From: </strong>
        {transaction.from}
      </h5>
      <h5>
        <strong>Category: </strong>
        {transaction.category}
      </h5>
      <div className="row">
        <div>
          {" "}
          <Link to={`/transactions`}>
            <button className="btn btn-secondary">Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link className="btn-light" to={`/transactions/${index}/edit`}>
            <button className="btn btn-primary">Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button className="btn btn-danger " onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}

export default TransactionDetails;

