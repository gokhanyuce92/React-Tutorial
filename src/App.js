import { useMemo, useState, useEffect } from 'react';
import './App.css';
import ExpenseEntryItem from './components/ExpenseEntryItem';
import ExpenseEntryItemList from './components/mui/ExpenseEntryItemList';
import FormattedMoney from './components/FormattedMoney';
import HookUseReducerMultipleActions from './components/HookUseReducerMultipleActions';
import PreviousValue, { squareNum } from './components/PreviousValue';

function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  const item = {
    id: 1,
    name: 'Grape Juice',
    amount: 30.5,
    spendDate: '2020-10-10',
    category: 'Food',
  };
  const items = [
    {
      id: 1,
      name: 'Pizza',
      amount: 80,
      spendDate: '2020-10-10',
      category: 'Food',
    },
    {
      id: 2,
      name: 'Grape Juice',
      amount: 30,
      spendDate: '2020-10-12',
      category: 'Food',
    },
    {
      id: 3,
      name: 'Cinema',
      amount: 210,
      spendDate: '2020-10-16',
      category: 'Entertainment',
    },
    {
      id: 4,
      name: 'Java Programming book',
      amount: 242,
      spendDate: '2020-10-15',
      category: 'Academic',
    },
    {
      id: 5,
      name: 'Mango Juice',
      amount: 35,
      spendDate: '2020-10-16',
      category: 'Food',
    },
    {
      id: 6,
      name: 'Dress',
      amount: 2000,
      spendDate: '2020-10-25',
      category: 'Cloth',
    },
    {
      id: 7,
      name: 'Tour',
      amount: 2555,
      spendDate: '2020-10-29',
      category: 'Entertainment',
    },
    {
      id: 8,
      name: 'Meals',
      amount: 300.25,
      spendDate: '2020-10-30',
      category: 'Food',
    },
    {
      id: 9,
      name: 'Mobile',
      amount: 3500,
      spendDate: '2020-11-02',
      category: 'Gadgets',
    },
    {
      id: 10,
      name: 'Exam Fees',
      amount: 1245,
      spendDate: '2020-11-04',
      category: 'Academic',
    },
  ];

  // const handleExpenseEntryItemClick = (item, isChecked) => {
  //   // console.log('Item clicked:', item);
  //   if (isChecked) {
  //     setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);
  //   } else {
  //     setSelectedItems((prevSelectedItems) =>
  //       prevSelectedItems.filter((selectedItem) => selectedItem.id !== item.id)
  //     );
  //   }
  // };

  const handleSelectionChange = (ids) => {
    // console.log("Selected IDs in parent:", ids);
    setSelectedIds(ids);
  };

  useEffect(() => {
    const filteredItems = items.filter((item) => selectedIds.includes(item.id));
    setSelectedItems(filteredItems);
  }, [selectedIds]);

  const totalAmount = selectedItems.reduce((total, currentItem) => {
    return total + currentItem.amount;
  }, 0);

  const handleReducerSubmit = (formData) => {
    console.log('Form data received in parent:', formData);
  };

  const [number, setNumber] = useState(0);
  const squaredNum = useMemo(() => squareNum(number), [number]);
  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  };
  return (
    <div className="App">
      <ExpenseEntryItem item={item} />
      <br />
      <ExpenseEntryItemList
        items={items}
        onSelectionChange={handleSelectionChange}
      />
      {selectedItems.length > 0 && (
        <div>
          <h2>Seçilen Öğeler:</h2>
          <ul>
            {selectedItems.map((selectedItem, index) => (
              <li key={index}>
                {selectedItem.name} -{' '}
                <FormattedMoney value={selectedItem.amount} /> -{' '}
                {selectedItem.category}
              </li>
            ))}
          </ul>
          <h3>
            Toplam Tutar: <FormattedMoney value={totalAmount} />
          </h3>
        </div>
      )}
      <PreviousValue />
      <br />
      <HookUseReducerMultipleActions onSubmit={handleReducerSubmit} />
      <br />
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={onChangeHandler}
      ></input>

      <div>OUTPUT: {squaredNum}</div>
    </div>
  );
}

export default App;
