import { Navigate } from "react-router";


const MiddlePoint = () => {

    return (

        <div>
            <h1>Dragon News Home</h1>
            <Navigate to={"/categories/1"}></Navigate>
        </div>
    );
};

export default MiddlePoint;