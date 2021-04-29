import React, { Component } from 'react'

class Sign_in extends Component {
    render() {
        return (
            <div>
                <div class="main">
                     <p className="sign" >Sign in</p>
                    <form className="form1">
                            <input className="un " type="text"  placeholder="Username"></input>
                            <input className="pass" type="password"  placeholder="Password"></input>
                             <a className="submit" >Sign in</a>
                             <p className="forgot" ><a href="#">Forgot Password?</a></p>
    
                  </form>
                </div>
                
            </div>
        )
    }
}

export default Sign_in
