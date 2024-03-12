// User.jsx

const User = ({ user }) => {
    return (
        <div>
            <h2>{user.login}</h2>
            <img src={user.avatar_url} alt={user.login} />
            <p>Name: {user.name}</p>
            <p>Bio: {user.bio}</p>
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
            <p>Public Repos: {user.public_repos}</p>
        </div>
    );
};

export default User;
