
import React,{useState}  from 'react'
import Axios from 'axios';


function Sign_up() {
    const url="http://127.0.0.1:8000/signup/"
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
            alert(res.data)
            window.location.href = 'http://localhost:3000/signIn';
        })

    }
    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
        console.log(newdata)

        
    }
    return (
        <div className="main">
                <form className="form1" onSubmit={(e)=>submit(e)}>
                            <p className="sign" >Sign Up</p>
                            <input onChange={(e)=>handle(e)}  className="un " type="text"  placeholder="Username" id="username" name="username"></input>
                            <input onChange={(e)=>handle(e)} className="pass" type="password"  placeholder="Password" id="password" name="password"></input>
                            <button className="submit" type="submit">Sign Up</button>
                            
                </form>   
        </div>
    )
}

export default Sign_up;

