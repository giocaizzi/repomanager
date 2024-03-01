import PropTypes from 'prop-types';
import styles from './Repository.module.css';

export default function Repository({ props}) {
    return (
        <div className={styles.repository}>
            <table>
                <tbody>
                    {
                        // table row with key-value pairs
                        Object.entries(props).map(([key, value]) => {
                            return (
                                <tr className={styles.tableRow}>
                                    <td className='bold'>{key}</td>
                                    <td>{value}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div >
    );
}

Repository.propTypes = {
    // props is an object with key-value pairs
    props: PropTypes.object.isRequired
};

