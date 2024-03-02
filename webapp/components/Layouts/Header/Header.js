import SimpleLink from '@/components/SimpleLink/SimpleLink';
import PropTypes from 'prop-types';
import Button from '@/components/Button/Button';

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
                    <SimpleLink href="/">Repomanager</SimpleLink>
                </div>
                {!isPublic && goodCookie && (
                    <div className={styles.topnavPrivate}>
                        <div>|</div>
                        <div className="topnav_links">
                            <SimpleLink href={"/" + cookie.username.value + "/repositories/"}>Repositories</SimpleLink>
                        </div>
                    </div>
                )}

            </div>
            <div className={styles.topnavRight}>
                <SimpleLink text="About" href="/about" >About</SimpleLink>
                {!isPublic ? (
                    <SimpleLink href="/" handleClick={delete_login_cookie} >
                        <Button text="Logout" type='primary-alt' />
                    </SimpleLink>
                ) : (
                    <SimpleLink text="Login" href="/login">
                        <Button text="Login" type='primary-alt' />
                    </SimpleLink>
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
