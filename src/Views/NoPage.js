import { Link,Outlet } from "react-router-dom";

function NoPage(){
return(
    <div>
        <Link to="/aboutus" className="w-full">404</Link>
    </div>
)
}

export default NoPage;