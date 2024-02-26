import RepositoriesTableRow from "@/components/Repositories/RepositoriesTableRow/RepositoriesTableRow";
import PropTypes from 'prop-types';
import styles from './RepositoriesTable.module.css';

export default function RepositoriesTable({ repositories }) {
    return (
        <div>
            <p> These are the user's repositories.</p>
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
        </div>
    )
}

RepositoriesTable.propTypes = {
    repositories: PropTypes.array
}