import { useState } from "react";
import FormattedMoney from "../FormattedMoney";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 200 },
  { 
    field: 'amount', 
    headerName: 'Amount', 
    type: 'number', 
    width: 90, 
    renderCell: (params) => {
      return <FormattedMoney value={params.value || 0} />;
    }
  },
  { field: 'spendDate', headerName: 'Spend Date', width: 130 },
  { field: 'category', headerName: 'Category', width: 130 }
];

const paginationModel = { page: 0, pageSize: 5 };

function ExpenseEntryItemList(props) {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectionChange = (selectionModel) => {
    const selectedIds = Array.from(selectionModel.ids);
    // console.log("Selected IDs:", selectedIds);
    setSelectedItems(selectedIds);
    props.onSelectionChange(selectedIds); 
  };

  const rows = props.items.map((item) => ({
    id: item.id,
    name: item.name,
    amount: item.amount,
    spendDate: item.spendDate,
    category: item.category,
  }));

  const data = rows;
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onRowSelectionModelChange={handleSelectionChange}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}

export default ExpenseEntryItemList;
