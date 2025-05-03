import React from 'react';
import FormattedMoney from './FormattedMoney';

function ExpenseEntryItem(props) {
  return (
    <div key={props.item.id}>
      <div>
        <b>Item:</b> <em>{props.item.name}</em>
      </div>
      <div>
        <b>Amount:</b>
        <em>
          <FormattedMoney value={props.item.amount} />
        </em>
      </div>
      <div>
        <b>Spend Date:</b> <em>{props.item.spendDate}</em>
      </div>
      <div>
        <b>Category:</b> <em>{props.item.category}</em>
      </div>
    </div>
  );
}

export default ExpenseEntryItem;
