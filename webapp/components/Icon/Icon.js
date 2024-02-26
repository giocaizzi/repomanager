import styles from './Icon.module.css'


export default function Icon({ src, alt }) {
    return (
        <img className={styles.icon} src={src} alt={alt}></img>
    )
}