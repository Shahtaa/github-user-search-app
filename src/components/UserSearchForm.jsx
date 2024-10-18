// UserSearchForm.jsx

// Importing necessary hooks and components from React and Material-UI
import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

// Functional component for the user search form
// Accepts a prop 'onSubmit' which is a function to handle the form submission
const UserSearchForm = ({ onSubmit }) => {
    // State to store the username entered by the user
    const [username, setUsername] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior (page reload)
        onSubmit(username); // Calls the 'onSubmit' function passed as a prop with the entered username
    };

    // The return statement defines the UI of the form
    return (
        // Box component from MUI for a flexbox container with spacing and styling
        <Box
            component="form" // Declares the Box as a form element
            onSubmit={handleSubmit} // Attaches the handleSubmit function to form submission
            sx={{ display: 'flex', gap: 2, justifyContent: 'center', marginTop: 2 }} // Custom styling with flexbox
        >
            {/* TextField component from MUI for inputting the GitHub username */}
            <TextField
                label="GitHub Username" // The label that appears above the input field
                variant="outlined" // Uses the outlined style variant for the TextField
                value={username} // Binds the input field's value to the 'username' state
                onChange={(e) => setUsername(e.target.value)} // Updates the 'username' state when the user types
                placeholder="Enter GitHub username..." // Placeholder text inside the input field
            />
            {/* Button component from MUI to submit the form */}
            <Button variant="contained" type="submit">
                Search
            </Button>
        </Box>
    );
};

export default UserSearchForm;
