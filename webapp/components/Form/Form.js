'use client'

import RadioInput from '@components/Inputs/RadioInput/RadioInput';
import TextInput from '@components/Inputs/TextInput/TextInput';
import { useState } from 'react';
import './Form.css';

import { fetchData} from '@lib/fetch';

export default function Form({}) {
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    function handleSubmit(event) {
        event.preventDefault()
        setIsLoading(true)
        const body = {
            login_type: event.target.login_type.value,
            login_input: event.target.login_input.value
        }
        try {
            const response = fetchData("/auth", "POST", body)
            console.log(response)
        }
        catch (error) {
            setErrorMessage(error.message)
        } finally {
            setIsLoading(false)
        }
    }
 
    return (
        <div className="form-login">
            <h2>Log in with GitHub</h2>
            <p>Select how you want to log in:</p>
            <form onSubmit={handleSubmit}>
                <div className='radios'>
                    <RadioInput label="Token" id="token" name="login_type" value="token" checked={true}></RadioInput>
                    <RadioInput label="Username" id="username" name="login_type" value="username"></RadioInput>
                </div>
                <TextInput id="login_input" name="login_input" placeholder="token or username"></TextInput>
                {isLoading && <p>Loading...</p>}
                {errorMessage && <div className='text-error'><p>{errorMessage}</p></div>}
                <input type="submit" value="Login"></input>
            </form>
        </div>
    );
}
