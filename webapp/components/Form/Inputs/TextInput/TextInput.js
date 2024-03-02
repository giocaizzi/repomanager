import styles from './TextInput.module.css';
import PropTypes from 'prop-types';

export default function TextInput({ id, name, labelText, placeholder = "Insert text", }) {
    return (
        <div className={styles.textInput}>
            <label htmlFor={id}>{labelText}</label>
            <input type="text" id={id} name={name} placeholder={placeholder} className={styles.input}></input>
        </div>
    );
};

TextInput.propTypes = {
    /** The id of the input */
    id: PropTypes.string.isRequired,
    /** The name of the input */
    name: PropTypes.string.isRequired,
    /** The label text */
    labelText: PropTypes.string.isRequired,
    /** The placeholder text */
    placeholder: PropTypes.string,
};