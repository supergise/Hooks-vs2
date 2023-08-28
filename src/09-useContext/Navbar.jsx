import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">UseContex</Link>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink
                            className={({isActive}) => `nav-link ${isActive ? 'active' : '' }`}
                            to="/"
                        >
                            Home
                        </NavLink>

                        <NavLink
                            className={({isActive}) => `nav-link ${isActive ? 'active' : '' }`}
                            to="/about"
                        >
                            About
                        </NavLink>

                        <NavLink
                            className={({isActive}) => `nav-link ${isActive ? 'active' : '' }`}
                            to="/login"
                        >
                            Login
                        </NavLink>
                        
                    </ul>
                    </div>
                </div>
                </nav>
        </>
    );
};

// <a href="/">Home</a> NO UTILIZAR <a/> PORQUE FULL REFRESH PAGE 

{/* <Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/login">Login</Link> */}

{/* <NavLink>
    className={(args) => { 
        console.log(args) esto te muestra el isActive en true  
        return 'nav-link'
    }}
</NavLink> */}
