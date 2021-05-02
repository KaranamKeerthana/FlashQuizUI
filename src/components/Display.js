import React, { Component } from 'react';
import {URLS} from './environment/Urls';
import {Link} from "react-router-dom";


class Display extends Component {
  constructor() {
      super();
      this.state = { 
        posts:[
          // {word:"Frivolous",meaning:"Not serious in content or behavior",mnemonic:"If something is free, you don't take it seriously",count:1},
          // {word:"Abstruse",meaning:"Difficulty to penetrate or difficult to understand",mnemonic:"Rhyms as CONFUSE, So in coonfusion you will not understand",count:2}
        ],
        
      };
      
    }


  async componentDidMount() {

    // Please don't remove this code as it will be useful for future
      // const headers = {
      //   'Accept': 'application/json, text/plain, */*',
      //   'Content-Type': 'application/json',
      //   "Access-Control-Allow-Headers" : "Content-Type",
      //   "Access-Control-Allow-Origin": "*",
      //   "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      // }    

    try{
      const response = await fetch(URLS.allDataURL);
      const jsons=await response.json();
      // console.log(jsons.data);
      this.setState({posts:[...this.state.posts,...jsons.data]})
      console.log(this.state.posts);
    }
    catch(error){
      console.log(error);
    }
  }
  render() {
    return (
      <div>
        <div>
          <Link to={{pathname:"/"}}>
            <button style={{border:"none",padding:"10px",marginTop:"30px",marginLeft:"30px",backgroundColor:"purple",color:"white",borderRadius:"5px"}}>
                Home
            </button>
          </Link>
        </div>
        <div>
          <table id="customers">
            <thead>
              <th>Id</th>
              <th>Word</th>
              <th>Meaning</th>
              <th>Example</th>
              <th>Mnemonic</th>
            </thead>
            <tbody>
              {
                this.state.posts.map((items,index)=>{
                  return(
                    <tr key={index}>  
                      <td>{index+1}</td>
                      <td>{items.word}</td>
                      <td>{items.meaning}</td>
                      <td>{items.example}</td>
                      <td>{items.mnemonic}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>

    )
  }
}

export default Display
