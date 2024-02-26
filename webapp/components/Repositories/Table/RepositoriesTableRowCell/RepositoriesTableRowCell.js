import styles from './RepositoriesTableRowCell.module.css'
import PropTypes from 'prop-types'

export default function RepositoriesTableRowCell({
    children,
    link = "",
    centered = false,
}) {
    const className = centered ? `${styles.td} ${styles.centered}` : `${styles.td}`

    return (
        <>
            <td className={className}>
                {link ? <a href={link}>{children}</a> : children}
            </td>
        </>

    )
}

RepositoriesTableRowCell.propTypes = {
    /** The content of the cell */
    children: PropTypes.node.isRequired,
    /** make the cell a link */
    link: PropTypes.string,
    /** center the content of the cell */
    centered: PropTypes.bool
}