import React, { Component } from 'react';

import "../Users/index.css"
export class index extends Component {
  constructor(props){
      super(props);
      this.state ={
          userInfo:this.props.props,
      } 
  }
    render() {
      const {userInfo} =this.state;
    
        return (
            <div>
              
                <h3 className="text-center text-info">UserInfo</h3>
            <button className="btn btn-info" onClick={this.props.clearInfo}>Go Back</button>
                <div className="text">
                <p><b>Address:</b> {userInfo.address.city}, {userInfo.address.street}</p>
                <p><b>Phone:</b> {userInfo.phone}</p>
                <p><b>Website:</b> {userInfo.website}</p>
                <p><b>Company Name:</b> {userInfo.company.name}</p>
                </div>
            </div>
        )
    }
}

export default index
