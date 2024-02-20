import RadioInput from '@components/Inputs/RadioInput/RadioInput';
import TextInput from '@components/Inputs/TextInput/TextInput';
import './Form.css';

export default function Form({ }) {
    return (
        <div className="form-login">
            <h2>Log in with GitHub</h2>
            <p>Select how you want to log in:</p>
            <form method="POST" action="/auth">
                <div className='radios'>
                    <RadioInput label="Token" id="token" name="login_type" value="token"></RadioInput>
                    <RadioInput label="Username" id="username" name="login_type" value="username"></RadioInput>
                </div>
                <TextInput id="login_input" name="login_input" placeholder="token or username"></TextInput>
                <input type="submit" value="Login"></input>
            </form>
        </div>
    );
};