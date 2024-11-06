import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';

type RequireAuthProps = {
    children: ReactNode;
}

function RequireAuth({ children }: RequireAuthProps) {
    const user = localStorage.getItem('user-profile');
    if (!user) {
        return <Navigate to={'/login'} replace />
    }
    return children;
}

export default RequireAuth;
