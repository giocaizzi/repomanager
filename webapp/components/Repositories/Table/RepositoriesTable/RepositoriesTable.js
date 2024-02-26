import RepositoriesTableRow from "@/components/Repositories/Table/RepositoriesTableRow/RepositoriesTableRow";
import PropTypes from 'prop-types';
import styles from './RepositoriesTable.module.css';

export default function RepositoriesTable({ repositories }) {
    if (!repositories || repositories.length === 0) {
        return <p>There are no repositories to display.</p>
    }
    return (
        <>
            <table id="repositoriesTable" className={styles.table}>
                <thead className={styles.th}>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Private</th>
                        <th>Language</th>
                        <th>Stars</th>
                        <th>Pages</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        repositories.map((repository, index) =>
                            <RepositoriesTableRow
                                name={repository.name}
                                description={repository.description}
                                isPrivate={repository.private}
                                language={repository.language}
                                stars={repository.stars}
                                pages={repository.pages}
                            />
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

RepositoriesTable.propTypes = {
    /** The array of repositories to display */
    repositories: PropTypes.array.isRequired
}