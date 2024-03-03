import Avatar from '@/components/User/Avatar/Avatar';
import styles from './UserOverview.module.css';
import PropTypes from 'prop-types';



export default function UserOverview({ name, login, avatar_url }) {
    return (
        <div className={styles.overview}>
            <Avatar avatar_url={avatar_url} />
            <div className={styles.userinfo}>
                <h2>{login}</h2>
                <p>
                    This is the repository manager of <em>{name}</em>, aka <b>{login}</b>.
                </p>
                <a href={"https://github.com/" + login}>Visit {login} on GitHub</a>
            </div>
        </div>
    );
}

UserOverview.propTypes = {
    /** The name of the user */
    name: PropTypes.string.isRequired,
    /** The login of the user */
    login: PropTypes.string.isRequired,
    /** The URL of the user's avatar */
    avatar_url: PropTypes.string.isRequired,
};

