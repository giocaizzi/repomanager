'use client'

import Link from 'next/link';
import PropTypes from 'prop-types';


export default function SimpleLink({
    children, href, handleClick = null
}) {

    return (
        <>
            <Link href={href} onClick={() => { handleClick() }}>
                {children}
            </Link>
        </>
    );
}

SimpleLink.propTypes = {
    /** The children to render as link */
    children: PropTypes.node.isRequired,
    /** The URL to link to */
    href: PropTypes.string.isRequired,
    /** The function to handle the click */
    handleClick: PropTypes.func
};