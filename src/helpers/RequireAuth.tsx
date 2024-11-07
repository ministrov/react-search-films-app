import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';

type RequireAuthProps = {
    children: ReactNode;
}

function RequireAuth({ children }: RequireAuthProps) {
    // const user = JSON.parse(localStorage.getItem('user-profile') as never);
    // console.log(user);
    // console.log(typeof user);
    // console.log(!user[0].name);
    if (!true) {
        return <Navigate to={'/login'} replace />
    }
    return children;
}

export default RequireAuth;
