import RepositoriesTableRowCell from '@/components/Repositories/Table/RepositoriesTableRowCell/RepositoriesTableRowCell';
import BaseIcon from '@/components/Icons/BaseIcon/BaseIcon';
import LanguageIcon from '@/components/Icons/LanguageIcon/LanguageIcon';
import BooleanIcon from '@/components/Icons/BooleanIcon/BooleanIcon';
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
                    <BaseIcon src="/github.png" alt="Github link" />
                </RepositoriesTableRowCell>
                <RepositoriesTableRowCell>
                    {name}
                </RepositoriesTableRowCell>
                <RepositoriesTableRowCell>
                    {description}
                </RepositoriesTableRowCell>
                <RepositoriesTableRowCell centered={true}>
                    <BooleanIcon topic="privacy" value={isPrivate ? "Private" : "Public"} />
                </RepositoriesTableRowCell>
                <RepositoriesTableRowCell centered={true}>
                    <LanguageIcon language={language} />
                </RepositoriesTableRowCell>
                <RepositoriesTableRowCell centered={true}>
                    {stars}
                </RepositoriesTableRowCell>
                <RepositoriesTableRowCell centered={true}>
                    <BooleanIcon topic="truth" value={pages ? "True" : "False"} />
                    {pages ? "True" : "False"}
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

