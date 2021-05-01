import React,{useState} from 'react';
import Axios from 'axios';
import {Link} from "react-router-dom";
import {URLS,frontURLS} from './environment/Urls';


function PostForm(){
    const headers = {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    } 
    
    const [data,setData]=useState({
        word:"",
        meaning:"",
        example:"",
        mnemonic:"",
    })
    function submit(e){
        e.preventDefault();
        Axios.post(URLS.registerURL,{ word:data.word,meaning:data.meaning,example:data.example,mnemonic:data.mnemonic},{headers:headers})
        .then(res=>{
            alert(res.data);
            window.location.href = frontURLS.homePageURL;
        })

    }
    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
        // console.log(newdata)
    }



    return(
        <div>
            <div>
                <Link to={{pathname:"/"}}>
                    <button style={{border:"none",padding:"10px",marginTop:"30px",marginLeft:"30px",backgroundColor:"purple",color:"white",borderRadius:"5px"}}>
                        Home
                    </button>
                </Link>
            </div>
            <div className="main1" style={{marginTop:"100px"}}>
                <form onSubmit={(e)=>submit(e)}>
                    <p className="sign1">Register Words</p>
                    <input onChange={(e)=>handle(e)} id="word" placeholder="Word"  type="text" name="word" className="un" required></input>
                    <input onChange={(e)=>handle(e)} id="meaning" placeholder="Meaning" type="text" name="meaning" className="un" required></input>
                    <input onChange={(e)=>handle(e)} id="example" placeholder="Example" type="text" name="example" className="un" required></input>
                    <input onChange={(e)=>handle(e)} id="mnemonic" placeholder="Mnemonic" type="text" name="mnemo" className="un" required></input>
                    <button type="submit" className="submit1">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default PostForm;