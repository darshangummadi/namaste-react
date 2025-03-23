import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return(
        <div className="error">
            <h3>{err.status +" " +err.statusText}</h3>
            <h4>Whoops!! something went wrong</h4>
            <h3>{err.data}</h3>
            <h3>{err.error.stack}</h3>
        </div>

    );
};

export default Error;