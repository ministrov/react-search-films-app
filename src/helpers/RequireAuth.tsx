import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserProfileContext } from '../context/user-profile.context';

type RequireAuthProps = {
    children: ReactNode;
}

function RequireAuth({ children }: RequireAuthProps) {
    const { users } = useContext(UserProfileContext) as any;
    const token = users;
    if (!token[0]?.name) {
        return <Navigate to={'/login'} replace />
    }
    return children;
}

export default RequireAuth;
