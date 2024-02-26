import RepositoriesTableRowCell from '@/components/Repositories/Table/RepositoriesTableRowCell/RepositoriesTableRowCell';
import BaseIcon from '@/components/Icons/BaseIcon/BaseIcon';
import LanguageIcon from '@/components/Icons/LanguageIcon/LanguageIcon';
import BooleanIcon from '@/components/Icons/BooleanIcon/BooleanIcon';
import PropTypes from 'prop-types';
import styles from './RepositoriesTableRow.module.css';

export default function RepositoriesTableRow({
    url,
    name ,
    description,
    isPrivate,
    language,
    stars,
    pages,
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
                </RepositoriesTableRowCell>
            </tr >
        </>
    )
}

RepositoriesTableRow.propTypes = {
    /** The URL of the repository */
    name: PropTypes.string.isRequired,
    /** The name of the repository */
    url: PropTypes.string.isRequired,
    /** The description of the repository */
    description: PropTypes.string.isRequired,
    /** Whether the repository is private or not */
    isPrivate: PropTypes.bool.isRequired,
    /** The main language of the repository */
    language: PropTypes.string.isRequired,
    /** The number of stars the repository has */
    stars: PropTypes.number.isRequired,
    /** Whether the repository has GitHub Pages or not */
    pages: PropTypes.bool.isRequired
}

