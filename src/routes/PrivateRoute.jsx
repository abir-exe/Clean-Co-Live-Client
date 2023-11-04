/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user, isLoading} = useAuth();

    if(isLoading) {
        return <div>Loading........</div>
    }

    if(!isLoading && !user?.email) {
        return <Navigate to="/login"></Navigate> ;
        
    }

    return children

};

export default PrivateRoute;