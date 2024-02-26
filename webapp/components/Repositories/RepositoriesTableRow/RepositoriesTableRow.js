import RepositoriesTableRowCell from '../RepositoriesTableRowCell/RepositoriesTableRowCell';
import PropTypes from 'prop-types';
import styles from './RepositoriesTableRow.module.css';

export default function RepositoriesTableRow({
    url = "/",
    name = "reponame",
    description = "this is a description",
    isPrivate = false, language = "Python",
    stars = 100,
    pages = false
}) {
    return (
        <>
            <tr key={name} className={styles.tr}>
                < RepositoriesTableRowCell centered={true} link={url}>
                        <img class="icon" src="/static/img/github.png" alt="Github" height="20"></img>
                </RepositoriesTableRowCell>
                <RepositoriesTableRowCell>
                    {name}
                </RepositoriesTableRowCell>
                <RepositoriesTableRowCell>
                    {description}
                </RepositoriesTableRowCell>
                <RepositoriesTableRowCell centered={true}>
                    {isPrivate ? "Private" : "Public"}
                </RepositoriesTableRowCell>
                <RepositoriesTableRowCell centered={true}>
                    {language}
                </RepositoriesTableRowCell>
                <RepositoriesTableRowCell centered={true}>
                    {stars}
                </RepositoriesTableRowCell>
                <RepositoriesTableRowCell centered={true}>
                    {pages ? "Yes" : "No"}
                </RepositoriesTableRowCell>
            </tr >
        </>
    )
}

RepositoriesTableRow.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    isPrivate: PropTypes.bool,
    language: PropTypes.string,
    stars: PropTypes.number,
    pages: PropTypes.number
}

