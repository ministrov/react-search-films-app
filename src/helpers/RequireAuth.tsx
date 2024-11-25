import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../store/store';

type RequireAuthProps = {
    children: ReactNode;
}

function RequireAuth({ children }: RequireAuthProps) {
    const userName = useSelector((state: RootState) => state.profile.name);

    if (!userName) {
        return <Navigate to={'/login'} replace />
    }
    return children;
}

export default RequireAuth;
