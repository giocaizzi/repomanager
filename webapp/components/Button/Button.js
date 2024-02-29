import styles from './Button.module.css'
import SimpleLink from '../SimpleLink/SimpleLink'

import PropTypes from 'prop-types'

export default function Button({ type = "primary", text }) {
    const className = type === "primary" ?
        `${styles.button} ${styles.primary}` :
        `${styles.button} ${styles.secondary}`
    return (
        <>
            <button className={className}>
                {text}
            </button>
        </>
    )
}

Button.propTypes = {
    /** type */
    type: PropTypes.oneOf(['primary', 'secondary']),
    /** text */
    text: PropTypes.string
}