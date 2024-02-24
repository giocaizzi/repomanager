'use client'

import RadioInput from '@components/Inputs/RadioInput/RadioInput';
import TextInput from '@components/Inputs/TextInput/TextInput';
import { login } from '@lib/actions';
import { useFormState, useFormStatus } from 'react-dom'
import './Form.css';

export default function Form({}) {
    const [errorMessage, dispatch] = useFormState(login, undefined)
    return (
        <div className="form-login">
            <h2>Log in with GitHub</h2>
            <p>Select how you want to log in:</p>
            <form action={dispatch}>
                <div className='radios'>
                    <RadioInput label="Token" id="token" name="login_type" value="token" checked={true}></RadioInput>
                    <RadioInput label="Username" id="username" name="login_type" value="username"></RadioInput>
                </div>
                <TextInput id="login_input" name="login_input" placeholder="token or username"></TextInput>
                <div className='text-error'>{errorMessage && <p>{errorMessage}</p>}</div>
                <input type="submit" value="Login"></input>
            </form>
        </div>
    );
}