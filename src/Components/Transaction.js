import { Link } from "react-router-dom";
import Moment from 'moment'
function Transaction({ transaction, index }) {
  let dateFormat = Moment(transaction.date,"MM/DD/YYYY").format('MMM DD');
  return (
    <tr>
      <td>
        {dateFormat}
      </td>
      <td>
      <Link to={`/transactions/${index}`}>{transaction.itemName}</Link> 
      </td>
      <td>
      <h5>{transaction.amount}</h5>
      </td>
    </tr>
  );
}

export default Transaction; 