import RepositoriesTable from '@/components/Repositories/Table/RepositoriesTable/RepositoriesTable'
import Tabs from '@/components/Repositories/Tabs/Tabs'
import PropTypes from 'prop-types'

export default function Repositories({repositories}) {
    return (
        <>
        <Tabs />
        <br></br>
        <RepositoriesTable repositories={repositories}/>
        </>
    )
    }

Repositories.propTypes = {
    Repositories: PropTypes.array
}

