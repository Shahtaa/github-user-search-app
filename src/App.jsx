import { useState } from 'react';
import axios from 'axios';
import UserSearchForm from './components/UserSearchForm.jsx';
import User from './components/User.jsx'; // Importing the User component
import './App.css'; // Importing the CSS styles
const App = () => {
  // State variables for user data, loading status, and error message
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to search for a GitHub user
  const searchUser = async (username) => {
    setLoading(true); // Set loading to true
    setError(null); // Clear any previous error messages

    try {
      // Make a GET request to the GitHub API to fetch user data
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data); // Set user data from API response
    } catch (err) {
      setError(err.response.data.message); // Set error message if request fails
    } finally {
      setLoading(false); // Set loading to false after request completion
    }
  };

  // Render UI elements
  return (
    <div className="container"> {/* Apply container class */}
      <h1>Github User Finder</h1>
      {/* Render UserSearchForm component and pass searchUser function as prop */}
      <UserSearchForm onSubmit={searchUser} />
      {/* Display loading message if loading is true */}
      {loading && <p className="loading-message">Loading...</p>} {/* Apply loading-message class */}
      {/* Display error message if error is not null */}
      {error && <p className="error-message">Error: {error}</p>} {/* Apply error-message class */}
      {/* Render User component and pass user data as prop */}
      {user && <User user={user} />}
    </div>
  );
};

export default App;
