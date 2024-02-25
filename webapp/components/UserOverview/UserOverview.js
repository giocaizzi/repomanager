import PropTypes from 'prop-types';
import styles from './UserOverview.module.css';

export default function UserOverview({ name="Mario Rossi", login="mariorossi", avatar_url="" }) {
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
    /** name of user */
    name: PropTypes.string,
    /** login of user */
    login: PropTypes.string,
    /** avatar_url of user */
    avatar_url: PropTypes.string
};

