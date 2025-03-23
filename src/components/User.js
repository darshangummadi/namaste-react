import {useState, useEffect} from "react";
const User = ({name, email}) => {

    const [listOfSnacks, setListOfSnacks] = useState([]);

    const [count] = useState(0);
    const [count2] = useState(1);

    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async () => {
        const response = await fetch('http://localhost:3000/api/products');
        const data = await response.json();
        console.log(data);
        setListOfSnacks(data);
    }

    return(
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h1>Count2: {count2}</h1>
            <h2>Name: {name}</h2>
            <h4>Email: {email}</h4>
            <h4>Phone: 1234567890</h4>
            <div>
               <ul>
                {listOfSnacks.map((snack, index) => (
                    <li key={index}>{snack.name}</li>
                    ))}
               </ul>
            </div>
        </div>
    );
};

export default User;