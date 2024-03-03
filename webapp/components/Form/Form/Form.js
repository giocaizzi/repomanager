'use client'

import RadioInput from '@/components/Form/Inputs/RadioInput/RadioInput';
import TextInput from '@/components/Form/Inputs/TextInput/TextInput';
import Button from '@/components/Button/Button';

import { useState } from 'react';
import styles from './Form.module.css';

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
        if ("error" in data) {
            setErrorMessage(data.error)
        }
        else{
            await create_login_cookie(data)
            setIsLoading(false)
            router.push('/'+ data.username)
        }

    }
 
    return (
        <div className={styles.formLogin}>
            <h2>Log in with GitHub</h2>
            <p>Select how you want to log in:</p>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className='radios'>
                    <RadioInput label="Token" id="token" name="login_type" value="token" checked={true}></RadioInput>
                    <RadioInput label="Username" id="username" name="login_type" value="username"></RadioInput>
                </div>
                <TextInput id="login_input" name="login_input" labelText="Enter login information:" placeholder="token or username"></TextInput>
                {isLoading && <p>Loading...</p>}
                {errorMessage && <div className='text-error'><p>{errorMessage}</p></div>}
                <Button type="primary" text="Login" HTMLType="submit"/>
            </form>
        </div>
    );
}
