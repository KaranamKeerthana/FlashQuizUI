import React, { Component } from 'react'


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
        const headers = {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          "Access-Control-Allow-Headers" : "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        }    
    
      try{
        const response = await fetch('http://127.0.0.1:8000/display/');
        const jsons=await response.json();
        console.log(jsons.data);
        var i ;
        // for (i=0;i<jsons.data.length;i++){
        //   jsons.data[i].count=i+1
        //   // this.state.posts.push(jsons.data[i]);
          
        // }
        this.setState({posts:[...this.state.posts,...jsons.data]})
        console.log(this.state.posts);
      }
      catch(error){
        console.log(error);
      }
    }
    render() {
      console.log(this.state.posts);
        return (
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
                                //  if (items.count === this.globalCount){
                                console.log("Keerthi");
                                
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
        )
    }
}

export default Display
