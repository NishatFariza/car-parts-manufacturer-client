import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../Hooks/useAdmin';
import Loading from '../../Shared/Loading/Loading';


const RequireAdmin = ({children}) => {
    let location = useLocation();
    let [user, loading, error] = useAuthState(auth)
    let [admin, adminLoading] = useAdmin(user)
    // console.log(admin);
    if (loading || adminLoading) {
        return <Loading></Loading>
    }
    if (!user || !admin) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        toast.error('This is Protected for only Admin', {id: 'requireAdmin'})
        signOut(auth)
        return <Navigate to="/login" />;
    }
    return children;
};

export default RequireAdmin;