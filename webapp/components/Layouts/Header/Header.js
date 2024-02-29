import SimpleLink from '@/components/SimpleLink/SimpleLink';
import PropTypes from 'prop-types';

import { delete_login_cookie, get_login_cookie } from '@/lib/cookies';

import styles from './Header.module.css';

export default async function Header({ isPublic = true, ...props }) {

    const cookie = await get_login_cookie()
    const goodCookie = cookie.token !== undefined && cookie.username !== undefined
    if (!isPublic && !goodCookie) {
        throw new Error("No token in cookie")
    }

    return (
        <div className={styles.topnav}>
            <div className={styles.topnavLeft}>
                <div className="bold">
                    <SimpleLink text="Repomanager" href="/" />
                </div>
                {!isPublic && goodCookie && (
                    <div className={styles.topnavPrivate}>
                        <div>|</div>
                        <div className="topnav_links">
                            <SimpleLink text="Repositories" href={"/" + cookie.username.value + "/repositories/"} />
                        </div>
                    </div>
                )}

            </div>
            <div className={styles.topnavRight}>
                <SimpleLink text="About" href="/about" />
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
