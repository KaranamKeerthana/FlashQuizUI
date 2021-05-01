import React,{useState} from 'react';
import Axios from 'axios';
import registerURL from './environment/Urls';


function PostForm(){
    const url="http://127.0.0.1:8000/create/"
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
        Axios.post(url,{
            word:data.word,
            meaning:data.meaning,
            example:data.example,
            mnemonic:data.mnemonic
            
        })
        .then(res=>{
            // console.log(res.data)
            alert(res.data);
            window.location.href = 'http://localhost:3000/';
        })

    }
    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
        console.log(newdata)

        
    }
    return(
        <div className="main1">
            <form onSubmit={(e)=>submit(e)}>
                <p className="sign1">Register Words</p>
                <input onChange={(e)=>handle(e)} id="word" placeholder="Word"  type="text" name="word" className="un" required></input>
                <input onChange={(e)=>handle(e)} id="meaning" placeholder="Meaning" type="text" name="meaning" className="un" required></input>
                <input onChange={(e)=>handle(e)} id="example" placeholder="Example" type="text" name="example" className="un" required></input>
                <input onChange={(e)=>handle(e)} id="mnemonic" placeholder="Mnemonic" type="text" name="mnemo" className="un" required></input>
                <button type="submit" className="submit1">Submit</button>
            </form>

        </div>
        // <div>
        //     <div className="post">
        //         <form action="">
        //             <p className="p">Register Words</p>
        //             <input type="text" id="word" name="word" placeholder=" " onChange={(e)=>handle(e)}></input>
        //             <label for="word">Word</label>
        //             <input onChange={(e)=>handle(e)} id="meaning" placeholder=" " type="text" name="meaning"></input>
        //             <label for="meaning">Meaning</label>
        //             <input onChange={(e)=>handle(e)} id="example" placeholder=" " type="text" name="example"></input>
        //             <label for="example">Example</label>
        //             <input onChange={(e)=>handle(e)} id="mnemonic" placeholder=" " type="text" name="mnemonic"></input>
        //             <label for="mnemonic">Mnemonic</label>
        //             <button type="submit" className="submit1">Submit</button>
        //         </form>
        //      </div>
        // </div>
    )
}
export default PostForm;