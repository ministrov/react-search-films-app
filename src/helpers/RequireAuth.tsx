import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';

type RequireAuthProps = {
    children: ReactNode;
}

function RequireAuth({ children }: RequireAuthProps) {

    if (!true) {
        return <Navigate to={'/login'} replace />
    }
    return children;
}

export default RequireAuth;
