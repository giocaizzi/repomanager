"use client";
import { useState } from 'react'

import SimpleLink from '../SimpleLink/SimpleLink'
import styles from './Button.module.css'

import PropTypes from 'prop-types'

export default function Button({ type = "primary", text, HTMLType = "button"}) {
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
            <button 
                className={`${styles.button} ${buttonType} ${isClicked}`} 
                onClick={() => { setClicked(true) }}
                type={HTMLType}
            >
                {text}
            </button>
        </>
    )
}

Button.propTypes = {
    /** type */
    type: PropTypes.oneOf(['primary', 'primary-alt','secondary']),
    /** text */
    text: PropTypes.string,
    /** HTMLType */
    HTMLType: PropTypes.oneOf(['button', 'submit', 'reset'])
}