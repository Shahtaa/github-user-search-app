// App.jsx

import { useState } from 'react';
import axios from 'axios';
import UserSearchForm from './components/UserSearchForm.jsx';
import User from './components/User.jsx';
import { Container, Typography, CircularProgress, Alert } from '@mui/material';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchUser = async (username) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container sx={{ textAlign: 'center', marginTop: 4 }}>
      <Typography variant="h3" gutterBottom>
        GitHub User Finder
      </Typography>
      <UserSearchForm onSubmit={searchUser} />
      {loading && <CircularProgress sx={{ marginTop: 2 }} />}
      {error && <Alert severity="error" sx={{ marginTop: 2 }}>{error}</Alert>}
      {user && <User user={user} />}
    </Container>
  );
};

export default App;
