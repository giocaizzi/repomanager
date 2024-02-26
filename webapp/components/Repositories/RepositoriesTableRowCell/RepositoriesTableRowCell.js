import styles from './RepositoriesTableRowCell.module.css'

export default function RepositoriesTableRowCell({
    children,
    link = false,
    centered = false,
}) {
    const className = centered ? `${styles.td} ${styles.centered}` : `${styles.td}`

    return (
        <td className={className}>
            {link ? <a href={link}>{children}</a> : children}
        </td>
    )
}