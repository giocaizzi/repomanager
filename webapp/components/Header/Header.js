import SimpleLink from '@components/SimpleLink/SimpleLink';
import PropTypes from 'prop-types';

import './Header.css';

export default function Header({ isPublic, ...props}) {

    return (
        <div className="topnav">
            <div className="topnav_left">
                <SimpleLink text="Repomanager" href="/" />
                {!isPublic && (
                    <SimpleLink text="Repositories" href={`/user/repos/${props.login}`} />
                )}
            </div>
            <div className="topnav_right">
                {!isPublic ? (
                    <SimpleLink text="Logout" href="/logout" />
                ) : (
                    <SimpleLink text="Login" href="/login" />
                )}
            </div>
        </div>
    );
};

Header.propTypes = {
    /** Public or private (logged in) header*/
    isPublic: PropTypes.bool,
    /** other properties */
    props : PropTypes.shape({
        /** The user's login */
        login: PropTypes.string
    })
};

Header.defaultProps = {
    isPublic: true,
    props: {
        login: "login"
    }
};
