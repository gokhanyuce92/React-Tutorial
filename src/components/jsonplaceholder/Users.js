import React, { useState, useEffect, use } from 'react';
import axios from 'axios';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import LoadingOverlay from '../LoadingOverlay';
import UserPosts from './UserPosts';

const columns = [
  { field: 'name', headerName: 'Name', width: 280 },
  { field: 'username', headerName: 'Username', width: 160 },
  { field: 'email', headerName: 'Email', width: 230 },
  { field: 'phone', headerName: 'Phone', width: 200 },
  { field: 'website', headerName: 'Website', width: 180 },
];

const paginationModel = { page: 0, pageSize: 5 };

function Users() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedPosts, setSelectedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState([]);

  let rows = users.map((user) => ({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    phone: user.phone,
    website: user.website,
  }));

  const handleSelectionChange = (selectionModel) => {
    const ids = Array.from(selectionModel.ids);
    setSelectedIds((prev) => {
      // console.log('Selected IDs:', ids);
      return ids;
    });
  };

  useEffect(() => {
    const selectedPosts = posts.filter((post) =>
      selectedIds.includes(post.userId)
    );
    const mappedPosts = selectedPosts.map((post) => ({
      id: post.id,
      title: post.title,
      body: post.body,
      name: users.find((user) => user.id === post.userId)?.name,
    }));
    // console.log('Selected Posts:', mappedPosts);
    setSelectedPosts(mappedPosts);
  }, [selectedIds]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, postsResponse] = await Promise.all([
          axios.get('https://jsonplaceholder.typicode.com/users'),
          axios.get('https://jsonplaceholder.typicode.com/posts'),
        ]);

        setUsers(usersResponse.data);
        setPosts(postsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Paper sx={{ height: 400, width: '100%', position: 'relative' }}>
      {loading ? (
        <LoadingOverlay />
      ) : (
        <>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: { paginationModel: paginationModel },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            onRowSelectionModelChange={handleSelectionChange}
            sx={{ border: 0 }}
          />
          <UserPosts posts={selectedPosts} />
        </>
      )}
    </Paper>
  );
}

export default Users;
