import PropTypes from 'prop-types';
import styles from './UserOverview.module.css';


export default function UserOverview({ name, login, avatar_url}) {
    return (
        <div class={styles.overview}>
            <div class={styles.avatar}>
                <img src={avatar_url} height="100" />
            </div>
            <div class={styles.userinfo}>
                <h2>{login}</h2>
                <p>
                    This is the repository manager of <em>{name}</em>, aka <b>{login}</b>.
                </p>
                <a href="">Visit {login} on GitHub</a>
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

