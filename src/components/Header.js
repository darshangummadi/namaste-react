import logo from '../../Images/logo-react.jpg';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Header = () =>{

    let btnName = "Login";

    const [btnNameReact, setbtnNameReact] = useState("Login");

    console.log("header Rendered");
    // if no dependency array => useEffect is called on every Render
    // if the depndency array is empty => use effect is called on initial render 
     // if the depndency array is not empty => use effect is called when the dependency changes 
    useEffect(()=>{
        console.log("useEffect called");
    });


    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li><a href="/contact" >Contact Us</a></li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{ btnNameReact=== "Login" ? setbtnNameReact("Logout"):setbtnNameReact("Login");
                        alert("successful " + btnNameReact)
                    }} >{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
};
export default Header;