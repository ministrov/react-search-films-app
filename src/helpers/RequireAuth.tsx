import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

function RequireAuth({ children }: { children: ReactNode }) {
    const isLogged = null;
    if (!isLogged) {
        return <Navigate to={'/login'} />
    }
    return children;
}

export default RequireAuth;
