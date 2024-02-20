import PropTypes from 'prop-types';
import './TextInput.css';

export default function TextInput({ id, name, placeholder }) {
    return (
        <div className='textinput'>
            <label for={id}>Enter your login information:</label>
            <input type="text" id={id} name={name} placeholder={placeholder}></input>
        </div>
    );
};

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
};

TextInput.defaultProps = {
    id: 'login_input',
    name: '',
    placeholder: "insert"
};