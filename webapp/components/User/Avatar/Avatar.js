import styles from './Avatar.module.css';


export default function Avatar({ avatar_url }) {
    return (
        <div 
            className={styles.avatar}
        >
            <img src={avatar_url} className={styles.img} />
        </div>);
};