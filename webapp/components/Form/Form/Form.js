'use client'

import RadioInput from '@/components/Form/Inputs/RadioInput/RadioInput';
import TextInput from '@/components/Form/Inputs/TextInput/TextInput';
import { useState } from 'react';
import './Form.css';
import { useRouter } from 'next/navigation'

import { fetchData} from '@/lib/fetch';
import { create_login_cookie } from '@/lib/cookies';

export default function Form({}) {
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    async function handleSubmit(event) {
        event.preventDefault()
        setIsLoading(true)
        const body = {
            login_type: event.target.login_type.value,
            login_input: event.target.login_input.value
        }
        const data = await fetchData("/auth/", "POST", body)
        console.log(data)
        setIsLoading(false)
        if ("error" in data) {
            setErrorMessage(data.error)
        }
        else{
            await create_login_cookie(data)
            router.push('/'+ data.username)
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
