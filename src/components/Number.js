

import React, { Component } from 'react';
import {URLS} from './environment/Urls';
import {Link} from "react-router-dom";


// Attributes
const NO_OF_SECONDS = 90



// Class Starts here
class Number extends Component {
  constructor() {
    super();
    this.state = { 
      time: {}, 
      seconds: NO_OF_SECONDS,
      isflipped:true,
      posts:[
        // {word:"Frivolous",meaning:"Not serious in content or behavior",mnemonic:"If something is free, you don't take it seriously",count:1},
        // {word:"Abstruse",meaning:"Difficulty to penetrate or difficult to understand",mnemonic:"Rhyms as CONFUSE, So in coonfusion you will not understand",count:2}
      ],
    };
    this.globalCount = 1;
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.flipped=this.flipped.bind(this);
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  async componentDidMount() {
    // const headers = {
    //   'Accept': 'application/json, text/plain, */*',
    //   'Content-Type': 'application/json',
    //   "Access-Control-Allow-Headers" : "Content-Type",
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    // }    
    try{
      const response = await fetch(URLS.displayURL);
      const jsons=await response.json();
      console.log(jsons.data);
      var i ;
      for (i=0;i<jsons.data.length;i++){
        jsons.data[i].count=i+1
        this.state.posts.push(jsons.data[i]);
      }
    }
    catch(error){
      console.log(error);
    }
  
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    this.startTimer()
  
  }
  

  startTimer() {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    
    // Check if we're at zero.
    if (seconds === 0) { 
        
        this.setState({
            isflipped:false
          });
    }
  }
  flipped(){
    this.setState({
      isflipped:false
    });
  }


  nextWord = () =>{
    this.globalCount += 1;
    this.setState({isflipped:true,seconds: NO_OF_SECONDS});
    this.startTimer();
  }


  render(){
    return(
      <div>
        <div>
          <Link to={{pathname:"/"}}>
            <button style={{border:"none",padding:"10px",marginTop:"30px",marginLeft:"30px",backgroundColor:"purple",color:"white",borderRadius:"5px"}}>
                Home
            </button>
          </Link>
        </div>
        <div>
        {
          this.state.posts.map((items)=>{
            if (items.count === this.globalCount){
              if (this.state.isflipped === true ){
                return(
                  <div>
                    <div className='flip-card-front' onClick={this.startTimer}>
                      <div className='time'> &emsp;&emsp;&emsp;  {this.state.time.m} : {this.state.time.s}</div>
                      {/* <img src={pic} alt="alt" className="pic"></img> */}
                      <div className="word">
                        <header>{items.word}</header> <br />
                        <button className='button' onClick={this.flipped}>Tap to see</button>

                      </div>
                    </div>
                  </div>
                );
              } 
              else{
                return(
                  
                    <div className='flip-card-back' >
                      <br />
                        <div style={{padding:"10px"}}>
                          <header><b>Meaning</b></header><br/>
                          <label>{items.meaning}</label><br/>
                          <header><b>Example</b></header><br/>
                          <label>{items.example}</label><br/>
                          <header><b>Mnemonic</b></header><br/>
                          <label>{items.mnemonic}</label><br/>
                          <button className='button' onClick={this.nextWord}>Next</button>
                        </div>
                    </div>
                  
                );
              }
            }
          })
        } 
      </div>
    </div>
    );
  }
}

export default Number;


