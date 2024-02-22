import RadioInput from '@components/Inputs/RadioInput/RadioInput';
import TextInput from '@components/Inputs/TextInput/TextInput';
import './Form.css';

export default function Form({ }) {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    async function onSubmit(event) {
        event.preventDefault()
        setIsLoading(true)
        setError(null) // Clear previous errors when a new request starts

        try {
            const formData = new FormData(event.target)
            const response = await fetch('/api/submit', {
                method: 'POST',
                body: formData,
            })
            // error
            if (!response.ok) {
                throw new Error('Failed to submit the data. Please try again.')
            }
        }
        catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }

        return (
            <div className="form-login">
                <h2>Log in with GitHub</h2>
                <p>Select how you want to log in:</p>
                <form onSubmit={onSubmit}>
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
}