import { useState } from 'react';
import FormattedMoney from './FormattedMoney';
// import './css/ExpenseEntryItemList.css';

function ExpenseEntryItemList(props) {
  const [selectedItems, setSelectedItems] = useState([]);
  const handleCheckboxChange = (item) => {
    if (selectedItems.includes(item.id)) {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((id) => id !== item.id)
      );
      props.onItemClick(item, false);
    } else {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item.id]);
      props.onItemClick(item, true);
    }
  };
  const lists = props.items.map((item) => (
    <tr key={item.id}>
      <td>
        <input
          type="checkbox"
          checked={selectedItems.includes(item.id)}
          onChange={() => handleCheckboxChange(item)}
        />
      </td>
      <td>{item.name}</td>
      <td>
        <FormattedMoney value={item.amount} />
      </td>
      <td>{item.spendDate}</td>
      <td>{item.category}</td>
    </tr>
  ));
  return (
    <table>
      <thead>
        <tr>
          <th>Action</th>
          <th>Item</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>{lists}</tbody>
    </table>
  );
}

export default ExpenseEntryItemList;
