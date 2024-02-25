import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function Home() {
  // if there is a token, redirect to the user's page
  cookies().get('token') && redirect('/'+ encodeURIComponent(cookies().get('username').value))
  // otherwise, show the home page
  return (
    <div>
      <h1>repomanager</h1>
      <p>Easily manage github repositories</p>
    </div>
  );
}