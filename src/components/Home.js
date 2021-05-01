import React, { Component } from 'react'
import pic1 from './images/k9.svg'
import undraw_exams_g4ow from './images/undraw_exams_g4ow.svg'
import undraw_social_interaction_cy9i from './images/undraw_social_interaction_cy9i.svg'
import undraw_professor_8lrt from './images/undraw_professor_8lrt.svg'
import undraw_Notebook_re_id0r from './images/undraw_Notebook_re_id0r.svg'
import {Link} from "react-router-dom";
import './Home.css';

class Home extends Component {
    
    render() {
        return (
            <div>
                <div >
                    <ul>
                        <li><a className="header" ><Link to={{pathname:"/"}}><b>FlashQuiz</b></Link></a></li>
                        <li style={{float:"right"}}><a><Link to={{pathname:"/signIn"}}>SignIn</Link></a></li>
                        <li style={{float:"right"}}><a><Link to={{pathname:"/signUp"}}>SignUp</Link></a></li>
                        <li style={{float:"right"}}><a><Link to={{pathname:"/register"}}>Register Words</Link></a></li>
                    </ul>
                </div>
                <div className="card1">
                <div className="card-right">
                    <img src={pic1} alt="holaa" className="pic1"></img>
                </div>
                <div className='card-left'>
                    <h1>CONQUER the KNOWLEDGE</h1>
                    <p>One stop to rehab your vocab</p>
                    <Link to={{pathname:"/number"}}><button className="button2" style={{color:'blue'}}>Get Started</button></Link>
                </div>
                </div>
                <div className="card2">
                    <div className='card2-left'>
                        <img src={undraw_exams_g4ow} alt="exams" className='exams'></img>
                    </div>
                    <div className='card2-right'>
                        
                        <h1>Shoot the Exams</h1>
                        <p>Almost every competitive exam has a section which tests the applicant’s English Language skills.
                             Therefore, it is extremely important for students appearing for these exams,
                              to improve their written as well as verbal English skills. 
                            An important part of this process is working on your English vocabulary,</p>
                    </div>
                </div>
                <div className="card3">
                    <div className='card3-right'>
                        <img src={undraw_social_interaction_cy9i} alt="exams" className='communicating'></img>
                    </div>
                    <div className='card3-left'>
                        
                        <h1>Communicating Ideas</h1>
                        <p>Successful communication or “saying what you mean” is dependent upon a good vocabulary base.
                             Using the right words when talking, makes you a more effective communicator.
                             Vocabulary makes it possible to build strong relationships through communication.</p>
                    </div>
                </div>
                <div className="card2">
                    <div className='card2-left'>
                        <img src={undraw_professor_8lrt} alt="writing" className='exams'></img>
                    </div>
                    <div className='card2-right'>
                        
                        <h1>Expressing yourself in Writing</h1>
                        <p>Having a good vocabulary to draw from can help you write more effectively.
                             Students need to use a more formal tone when writing – not conversational language –
                             and to do that, they need a richer vocabulary to tap into those words we don’t use when we speak.</p>
                    </div>
                </div>
                <div className="card3">
                    <div className='card3-right'>
                        <img src={undraw_Notebook_re_id0r} alt="exams" className='communicating'></img>
                    </div>
                    <div className='card3-left'>
                        
                        <h1>Language Development</h1>
                        <p>Children who develop a rich vocabulary tend to be deeper thinkers, 
                            express themselves better and read more. Improving language and 
                            literacy skills early in life will help them be more successful academically and communicatively.</p>
                    </div>
                </div>
            {/* <div class="navbar1">
                    <a href="#home">BE AN OPPORTUNIST.....ACE IT !!!</a>
                </div> */}
                
            </div>
        )
    }
}

export default Home
