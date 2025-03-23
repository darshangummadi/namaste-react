import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log(props);

        this.state = {
            userInfo:{
                name: "Dummy",
                login: "Irving",
                id: "123",
            }
        };

    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/darshangummadi");
        const json = await data.json();
       
        this.setState({
            userInfo: json,
        });
    }

    render(){
        const {name, email}=this.props;
        const {id, login, avatar_url} = this.state.userInfo;
        return(
            <div className="user-card">
                <img src="https://avatars.githubusercontent.com/u/98764752?v=4"/>
                <h2>Name: {name}</h2>
                <h4>Email: {email}</h4>
                <h4>Phone: 1234567890</h4>
                <h4>ID: {id}</h4>
                <h4>Login: {login}</h4>
            </div>
        );
    }
}

export default UserClass;