'use client'

import Link from 'next/link';
import PropTypes from 'prop-types';


export default function SimpleLink({ 
    text , href, handleClick = null 
}) {

    return (
        <>
            {
                handleClick === null ?
                    <Link href={href}>{text}</Link> :
                    <Link href={href} onClick={
                        () => { handleClick() }
                    }>
                        {text}
                    </Link>
            }
        </>
    );
}

SimpleLink.propTypes = {
    /** The text to display */
    text: PropTypes.string.isRequired,
    /** The URL to link to */
    href: PropTypes.string.isRequired,
    /** The function to handle the click */
    handleClick: PropTypes.func
};