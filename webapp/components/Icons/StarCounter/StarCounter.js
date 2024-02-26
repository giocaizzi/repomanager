import BaseIcon from "../BaseIcon/BaseIcon";
import PropTypes from 'prop-types';

import styles from './StarCounter.module.css';

export default function StarCounter({ count }) {
    return (
        <>
            {count > 0 ?
                <div className={styles.starCounter}>
                    <BaseIcon type="text" text={count} />⭐️
                </div>
                : null}

        </>

    );
}

StarCounter.propTypes = {
    /** Number of stars */
    count: PropTypes.number.isRequired,
};

