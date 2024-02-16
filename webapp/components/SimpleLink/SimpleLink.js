import Link from 'next/link';
import PropTypes from 'prop-types';


export default function SimpleLink({text, href}) {
    return (
        <>
        <Link href={href}>{text}</Link>
        </>
    );
}

SimpleLink.propTypes = {
    /** The text to display */
    text: PropTypes.string,
    /** The URL to link to */
    href: PropTypes.string
};

SimpleLink.defaultProps = {
    text: "Link",
    href: "/"
};