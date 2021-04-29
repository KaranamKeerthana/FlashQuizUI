import React, { Component } from 'react'

class Sign_up extends Component {
    render() {
        return (
            <div>
                <div class="main">
                     <p className="sign" >Sign Up</p>
                    <form className="form1">
                            <input className="un " type="text"  placeholder="Username"></input>
                            <input className="pass" type="password"  placeholder="Password"></input>
                             <a className="submit" >Sign Up</a>
    
                  </form>
    
            
                
                </div>
     
            </div>
        )
    }
}

export default Sign_up
