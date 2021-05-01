import React, { useState } from 'react'
import Axios from 'axios';

function Sign_in(){
    const url="http://127.0.0.1:8000/signin/"
    const headers = {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      }    
    const [data,setData]=useState({
        username:"",
        password:"",
        
    })
    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            username:data.username,
            password:data.password,
            
        })
        .then(res=>{
            // console.log(res.data)
            alert(res.data);
            if(res.data=="Logged in successfully"){
                 window.location.href = 'http://localhost:3000/home1';
            }
        })

    }
    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
        console.log(newdata)

        
    }
        return (
            // <div>
            //     <div class="main">
            //          <p className="sign" >Sign in</p>
            //         <form className="form1">
            //                 <input className="un " type="text"  placeholder="Username"></input>
            //                 <input className="pass" type="password"  placeholder="Password"></input>
            //                  <a className="submit" >Sign In</a>
            //                  <p className="forgot" ><a href="#">Forgot Password?</a></p>
    
            //       </form>
    
            
                
            //     </div>
     
            // </div>
            <div className="main">
                <form className="form1" onSubmit={(e)=>submit(e)}>
                    <p className="sign" >Sign In</p>
                    <input onChange={(e)=>handle(e)}  className="un " type="text"  placeholder="Username" id="username" name="username"></input>
                    <input onChange={(e)=>handle(e)} className="pass" type="password"  placeholder="Password" id="password" name="password"></input>
                    <button className="submit" type="submit">Sign In</button>
                    
                </form>   
            </div>
        )
    }


export default Sign_in
