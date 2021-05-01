import React, { useState } from 'react'
import Axios from 'axios';
import {Link} from "react-router-dom";
import {URLS,frontURLS} from './environment/Urls';

function Sign_in(){

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
        Axios.post(URLS.signInURL,{username:data.username,password:data.password},{headers:headers})
        .then(res=>{
            alert(res.data);
            if(res.data === "Logged in successfully"){
                window.location.href = frontURLS.signInHomeURL;
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
            <div>
                <div>
                    <Link to={{pathname:"/"}}>
                        <button style={{border:"none",padding:"10px",marginTop:"30px",marginLeft:"30px",backgroundColor:"purple",color:"white",borderRadius:"5px"}}>
                            Home
                        </button>
                    </Link>
                </div>
                <div className="main">
                    <form className="form1" onSubmit={(e)=>submit(e)}>
                        <p className="sign" >Sign In</p>
                        <input onChange={(e)=>handle(e)}  className="un " type="text"  placeholder="Username" id="username" name="username"></input>
                        <input onChange={(e)=>handle(e)} className="pass" type="password"  placeholder="Password" id="password" name="password"></input>
                        <button className="submit" type="submit">Sign In</button>
                        
                    </form>   
                </div>
            </div>
        )
    }


export default Sign_in
