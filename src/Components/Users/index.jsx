import React, { Component } from 'react'
import UserInfo from "../User-Info/index.jsx"
import "./index.css" 
export class index extends Component {
    constructor(){
        super()
        this.state={
            userinfo:null,
            isLoading:true,
            users:[],
            error:null
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((resp)=>resp.json())
        .then((data)=>this.setState({
            users:data,
            isLoading:false,
            error:null
        }),
        (error)=>this.setState({
            error:error.message,
            isLoading:false,
            data:[]
        })
        )
    }
    handleClick = (e)=>{
      this.setState({
          userinfo:e
      })
    }

    clearInfo = () => {
        this.setState({userinfo: null})
    }

    render() {
        const {isLoading,users,error,userinfo}=this.state;
        if(isLoading){
           return <h3>Loading....</h3>
        }
        else if(error){
           return <h3>{error}</h3>
        }
        else if(userinfo){
        return ( <div>
        <UserInfo props={userinfo} clearInfo={this.clearInfo}/>
        </div>)
        }
        else{

            return (
                <div>
                    <h3 className="text-center py-3 text-primary">Users</h3>
                    {users.map(user=>
                    <div className=" justify-content-center" >
                    <ul className="text" onClick={()=>this.handleClick(user)}>
                    <li className="bg-secondary text-white">
                        {user.name}
                        </li>
                    </ul>
                </div>)}
                </div>
            )
        }
    }
}

export default index
