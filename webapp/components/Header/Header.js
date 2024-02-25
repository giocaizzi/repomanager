import SimpleLink from '@components/SimpleLink/SimpleLink';
import PropTypes from 'prop-types';

import { delete_login_cookie, get_login_cookie } from '@lib/cookies';

import './Header.css';

export default async function Header({ isPublic = true, ...props }) {

    const cookie = await get_login_cookie()

    return (
        <div className="topnav">
            <div className="topnav_left">
                <div className="topnav_logo bold">
                    <SimpleLink text="Repomanager" href="/" />
                </div>
                {!isPublic && (
                    <div className='topnav_private'>
                        <div>|</div>
                        <div className="topnav_links">
                            <SimpleLink text="Repositories" href={`/user/repos/${props.login}`} />
                        </div>
                    </div>
                )}

            </div>
            <div className="topnav_right">
                {!isPublic ? (
                    <SimpleLink text="Logout" href="/" handleClick={delete_login_cookie} />
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
    props: PropTypes.shape({
        /** The user's login */
        login: PropTypes.string
    })
};
