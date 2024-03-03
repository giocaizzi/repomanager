import styles from './RepositoriesTableRowCell.module.css'
import PropTypes from 'prop-types'

export default function RepositoriesTableRowCell({
    children,
    centered = false,
}) {
    const className = centered ? `${styles.td} ${styles.centered}` : `${styles.td}`

    return (
        <>
            <td className={className}>
                {children}
            </td>
        </>

    )
}

RepositoriesTableRowCell.propTypes = {
    /** The content of the cell */
    children: PropTypes.node.isRequired,
    /** center the content of the cell */
    centered: PropTypes.bool
}