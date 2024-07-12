import { Link } from "react-router-dom";

const NavigationBar = ( ) => {
    return (
        <div>

            <Link to={`/homepage`}>Home</Link>
            <Link to={`/loginpage`}>Login</Link>
        </div>
    )
}

export default NavigationBar;