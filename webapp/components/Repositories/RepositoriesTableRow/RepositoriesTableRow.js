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
                <td class="centered">
                    <a href={url}>
                        <img class="icon" src="/static/img/github.png" alt="Github" height="20"></img>
                    </a>
                </td>
                <td >
                    <a href="{{url_for('user.repo',username=user.login,repo_name=repo.name)}}">{name}</a>
                </td>
                <td class="description">
                    {description}
                </td>
                <td class="centered">
                    {isPrivate}
                </td>
                <td class="centered">
                    {language}
                </td>
                <td class="centered">
                    {stars}
                </td>
                <td class="centered">
                    {pages}
                </td>
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

