'use client'

import Link from 'next/link';
import PropTypes from 'prop-types';


export default function SimpleLink({ text = "Link", href = "/", handleClick = null }) {

    return (
        <>
            {
                handleClick === null ? <Link href={href}>{text}</Link> : <Link href={href} onClick={() => { handleClick() }}>{text}</Link>
            }
        </>
    );
}

SimpleLink.propTypes = {
    /** The text to display */
    text: PropTypes.string,
    /** The URL to link to */
    href: PropTypes.string,
    /** The function to handle the click */
    handleClick: PropTypes.func
};