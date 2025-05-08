import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import axios from 'axios';

function UserTodos({ userIds }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      await axios
        .get('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
          const todos = response.data.filter((todo) =>
            userIds.includes(todo.userId)
          );
          setTodos(todos);
        })
        .catch((error) => {
          console.error('Error fetching todos:', error);
        });
    };

    fetchTodos();
  }, [userIds]);

  return (
    <>
      <h2>Todos</h2>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <Card key={todo.id} sx={{ maxWidth: 345, margin: 2 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {todo.title}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {todo.completed ? (
                <IconButton
                  color="success"
                  aria-label="task completed"
                  size="large"
                >
                  <TaskAltIcon />
                </IconButton>
              ) : (
                <p>
                  <Button variant="contained" size="small" color="primary">
                    Not Completed
                  </Button>
                </p>
              )}
            </CardActions>
          </Card>
        ))
      ) : (
        <p></p>
      )}
    </>
  );
}

export default UserTodos;
