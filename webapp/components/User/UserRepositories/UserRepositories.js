import PropTypes from 'prop-types';

export default function UserRepositories({ repositories }) {
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
    repositories: PropTypes.array.isRequired,
};

