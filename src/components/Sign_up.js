
import React,{useState}  from 'react'
import Axios from 'axios';
import {URLS, frontURLS} from './environment/Urls';
import {Link} from "react-router-dom";


function Sign_up() {
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
        Axios.post(URLS.signUpURL,{
            username:data.username,
            password:data.password,
        }, {headers:headers})
        .then(res=>{
            alert(res.data)
            window.location.href = frontURLS.signInFrontURL;
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
                    <p className="sign" >Sign Up</p>
                    <input onChange={(e)=>handle(e)}  className="un " type="text"  placeholder="Username" id="username" name="username"></input>
                    <input onChange={(e)=>handle(e)} className="pass" type="password"  placeholder="Password" id="password" name="password"></input>
                    <button className="submit" type="submit">Sign Up</button>
                </form>   
            </div>
        </div>

    )
}

export default Sign_up;

