import { useState } from 'react'

import SimpleLink from '../SimpleLink/SimpleLink'
import styles from './Button.module.css'

import PropTypes from 'prop-types'

export default function Button({ type = "primary", text }) {
    const [clicked, setClicked] = useState(false);

    let buttonType;
    switch (type) {
        case "primary":
            buttonType = styles.primary;
            break;
        case "primary-alt":
            buttonType = styles.primaryAlt;
            break;
        case "secondary":
            buttonType = styles.secondary;
            break;
    }

    const isClicked  = clicked ? styles.clicked : ""
    return (
        <>
            <button className={`${styles.button} ${buttonType} ${isClicked}`} onClick={() => { setClicked(true) }}>
                {text}
            </button>
        </>
    )
}

Button.propTypes = {
    /** type */
    type: PropTypes.oneOf(['primary', 'primary-alt','secondary']),
    /** text */
    text: PropTypes.string
}