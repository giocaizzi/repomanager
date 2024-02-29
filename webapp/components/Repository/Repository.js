import PropTypes from 'prop-types';

export default function Repository({props}) {
    return (
        <div>
            <table>
                <tr>
                    {
                        Object.keys(props).map((key) => {
                            <>
                                <th>{key}Ciao</th>
                                <td>
                                    {props[key]}
                                </td>
                            </>
                        })
                    }
                </tr>
            </table>
        </div>
    );
}

Repository.propTypes = {
    props: PropTypes.object
};

