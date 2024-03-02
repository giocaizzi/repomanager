import PropTypes from 'prop-types';

import styles from './RadioInput.module.css';

export default function RadioInput({ label = "label", id = "radio_id", name = "", value = "", checked = false }) {
    return (
        <div className={styles.radioInput}>
            {checked ?
                <input type="radio" id={id} name={name} value={value} defaultChecked></input>
                :
                <input type="radio" id={id} name={name} value={value}></input>}
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

RadioInput.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string
};