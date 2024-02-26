import PropTypes from 'prop-types';
import styles from './UserOverview.module.css';


export default function UserOverview({ name = "GitHub", login = "github", avatar_url = "https://avatars.githubusercontent.com/u/9919?v=4" }) {
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
    name: PropTypes.string,
    login: PropTypes.string,
    avatar_url: PropTypes.string
};

