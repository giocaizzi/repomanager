import styles from './BaseIcon.module.css'
import PropTypes from 'prop-types';


export default function BaseIcon({ type = "img", text = "Icon", src = "", alt = "BaseIcon" }) {
    if (type === "img") {
        return (
            <img className={styles.icon} src={"/icons" + src} alt={alt}></img>
        )
    }
    return (
        <p>{text}</p>
    )
}

BaseIcon.propTypes = {
    /** imgage or text (emoji) */
    type: PropTypes.oneOf(['img', 'text']),
    /** text to display */
    text: PropTypes.string,
    /** image source */
    src: PropTypes.string,
    /** image alt text */
    alt: PropTypes.string
}