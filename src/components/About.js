import User from "./User";
import UserClass from "./UserClass";
import {useState, useEffect} from "react";

const users =[
    {firstName: "Darshan", lastName:"gummadi", age:28},
    {firstName: "Arka", lastName:"chimmili", age:6},
    {firstName: "Arjun", lastName:"chimmini", age:3},
    {firstName: "Daniel", lastName:"Charles", age:28}
  ];
  
  const output = users.reduce(function(acc, curr){
    if (acc[curr.age]){
      acc[curr.age] = ++ acc[curr.age];
    }
    else{
      acc[curr.age] = 1;
    }
    return acc;
  },{});
  
  console.log(output);


const About = ()=>{
    return(<div>
        <h1>About</h1>
        <h2>This is namaste React web series</h2>
        <User name={"Darshan Gummadi (function)"} email={"gummadidarshan@outlook.com (function)"}/>
        <UserClass name={"Darshan Gummadi (class)"} email={"gummadidarshan@outlook.com (class)"}/>
    </div>
    );
};

export default About;