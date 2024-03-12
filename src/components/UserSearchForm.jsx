// UserSearchForm.jsx
import { useState } from 'react';

const UserSearchForm = ({ onSubmit }) => {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(username);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter GitHub username..."
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default UserSearchForm;
