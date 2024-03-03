import RepositoriesTable from '@/components/Repositories/Table/RepositoriesTable/RepositoriesTable'
import Tabs from '@/components/Repositories/Tabs/Tabs/Tabs'
import styles from './Repositories.module.css'
import PropTypes from 'prop-types'

export default function Repositories({repositories}) {
    return (
        <div className={styles.repositories}>
        <Tabs />
        <br></br>
        <RepositoriesTable repositories={repositories}/>
        </div>
    )
    }

Repositories.propTypes = {
    Repositories: PropTypes.array
}

