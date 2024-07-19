import "./Navbar.css";
import logo from "./Land_Logo.png";

export default function Navbar(){
    const titleStyle = {
        fontFamily:
          "Verdana, Geneva, Tahoma, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        // Add any other desired styles (e.g., font size, color) here
      };
    return <nav className="nav">
         
        <div className="site-logo">
        <h1 style={titleStyle}>LORS</h1>   
        <img  className="logo1" src={logo} alt="My Logo" />
        
        </div>
        <ul >
            <li style={titleStyle}>
                <a href="/home">Home</a>
            </li>
            <li style={titleStyle}>
                <a href="/blog">Blog</a>
            </li>
            <li style={titleStyle}>
                <a href="/social">Social</a>
            </li>
            <li style={titleStyle}>
                <a href="/about">About Us</a>
            </li>
        </ul>
    </nav>
}