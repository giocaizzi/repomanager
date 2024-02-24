import PropTypes from 'prop-types';

import './RadioInput.css';

export default function RadioInput({label = "label", id="radio_id" , name="" , value=""}) {
    return (
        <div className='radioinput'>
            <input type="radio" id={id} name={name} value={value} checked></input>
            <label for={id}>{label}</label>
        </div>
    );
};

RadioInput.propTypes = {
    label: PropTypes.string,
    id : PropTypes.string,
    name : PropTypes.string,
    value : PropTypes.string
};