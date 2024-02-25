import PropTypes from 'prop-types';

const repos = [
    {
        name: "Repo 1",
        description: "The first repository"
    },
    { name: "Repo 2" },
    {
        name: "Repo 3", description: "The third repository"
    }
];

export default function UserRepositories({ repositories = repos }) {
    return (
        <div>
            <h3>Repositories</h3>
            <div>
                There are {repositories.length} repositories available for this user.
            </div>
            <ul>
                {repositories.map(repo => <li><b>{repo.name}</b>: {repo.description && repo.description} </li>)}
            </ul>
        </div>
    );
}

UserRepositories.propTypes = {
    /** Array of repositories */
    repositories: PropTypes.array
};

