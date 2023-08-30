import { redirect } from "react-router-dom";

export default function getAuthToken(){
    const token = localStorage.getItem('token');
    return token;
}

export function tokenLoader(){
    return getAuthToken();
}

export function checkAuthToken(){
    const token = getAuthToken();

    if(!token){
        return redirect('/auth');
    }

    return null;
}