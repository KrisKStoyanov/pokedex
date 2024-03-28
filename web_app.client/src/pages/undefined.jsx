import { useRouteError } from 'react-router-dom'
function Undefined() {
    const error = useRouteError();

    return (
        <div id="layout-frame">
        <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occured</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

export default Undefined;