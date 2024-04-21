import '../Styles/Navbar.css'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from "../assets/home.jpg";

export default function Navbar(){  
    return (
        <nav className="nav">
          <Link to="/" className="site-title">
          
            <img src={logo}  
                     width="50" height="50" style = {{ borderRadius: "50%"}}
                     alt="Logo" /> 
            <span style={{marginLeft:"10px"}}>
            HomeGuideAI
            </span>
          </Link>
          <ul>
            <CustomLink to="/about">About Us</CustomLink>
            <CustomLink to="/login">Login</CustomLink>
          </ul>
        </nav>
      )
    }
    
    function CustomLink({ to, children, ...props }) {
      const resolvedPath = useResolvedPath(to)
      const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    
      return (
        <li className={isActive ? "active" : ""}>
          <Link to={to} {...props}>
            {children}
          </Link>
        </li>
      )
    }
    