import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({request}){
  
  const data = await request.formData();
  
  let url = new URL(request.url).searchParams;
  let mode = url.get('mode') || 'login';

  if(mode != 'login' && mode != 'signup'){
    throw json({message: 'Could not find mode'}, {status: 400});
  }
  
  let authData = {
    email: data.get('email'),
    password: data.get('password')
  }
  
  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(authData)
  });

  if(response.status == 422 || response.status == 401){
    return response;
  }

  if(!response.ok){
    return json({message: 'Could not authenticate'}, {status: 500});
  }

  return redirect('/');



}