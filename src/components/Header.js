import logo from '../../Images/logo-react.jpg';
import { useState } from 'react';
const Header = () =>{

    let btnName = "Login";

    const [btnNameReact, setbtnNameReact] = useState("Login");


    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{ btnNameReact=== "Login" ? setbtnNameReact("Logout"):setbtnNameReact("Login");
                        console.log(btnNameReact);
                    }} >{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
};
export default Header;