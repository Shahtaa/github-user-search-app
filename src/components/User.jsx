// User.jsx

// Importing necessary components from Material-UI
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const User = ({ user }) => {
    return (
        // Card component to create a container with elevation and border for user information
        <Card sx={{ maxWidth: 345, margin: '20px auto' }}>
            {/* CardMedia for displaying the user's avatar image */}
            <CardMedia
                component="img"       // Specifies that this CardMedia will render an image
                height="300"          // Sets the height of the image to 300px
                image={user.avatar_url} // URL of the image to be displayed (user's avatar)
                alt={user.login}      // Alt text for accessibility
                sx={{
                    objectFit: 'contain', // Ensures the full image is shown without cropping
                    marginTop: 2         // Adds margin of 2 units on top of the image
                }}
            />
            <CardContent>
                {/* User's login (username) displayed as a heading */}
                <Typography variant="h5" component="div">
                    {user.login}
                </Typography>
                {/* Display user's name or 'N/A' if not available */}
                <Typography variant="body1">
                    Name: {user.name || 'N/A'}
                </Typography>
                {/* Display user's bio or a default message if not available */}
                <Typography variant="body2" color="text.secondary">
                    Bio: {user.bio || 'No bio available'}
                </Typography>
                {/* Display user's follower and following count */}
                <Typography variant="body2">
                    Followers: {user.followers}
                </Typography>
                <Typography variant="body2">
                    Following: {user.following}
                </Typography>
                {/* Display the number of public repositories the user has */}
                <Typography variant="body2">
                    Public Repos: {user.public_repos}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default User;
