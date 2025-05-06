import React, { useState, useMemo } from 'react';
import { squareNum } from '../PreviousValue';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function SquaredNum() {
  const [number, setNumber] = useState(0);
  const squaredNum = useMemo(() => squareNum(number), [number]);

  return (
    <div>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <p>OUTPUT: {squaredNum}</p>
      </Box>
    </div>
  );
}

export default SquaredNum;
