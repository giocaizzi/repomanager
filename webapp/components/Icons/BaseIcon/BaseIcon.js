import styles from './BaseIcon.module.css'
import PropTypes from 'prop-types';


export default function BaseIcon({ type="img", text, src, alt }) {
    if (type === "img"){
        return (
            <img className={styles.icon} src={"/icons"+src} alt={alt}></img>
        )
    }
    return (
        <p>{text}</p>
    )
}

BaseIcon.propTypes = {
    type : PropTypes.oneOf(['img', 'text']),
}