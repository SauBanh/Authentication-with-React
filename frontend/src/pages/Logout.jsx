import { redirect } from 'react-router-dom';

export function action() {
    localStorage.removeItem('token');
    // console.log(123);
    return redirect('/auth?mode=login');
}
