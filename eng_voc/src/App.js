import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Number from './components/Number';
import Home from './components/Home';
import Sign_up from './components/Sign_up';
import Sign_in from './components/Sign_in';
import {BrowserRouter,Route} from "react-router-dom";
import PostForm from './components/PostForm';


function App() {
  return (
    <div className="App">
      {/* <Sign_in></Sign_in> */}
      {/* <Sign_up></Sign_up> */}
      <BrowserRouter>
        <Route exact path="/number" component={Number}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signIn" component={Sign_in}/>
        <Route exact path="/signUp" component={Sign_up}/>
        <Route exact path="/register" component={PostForm}/>
        

        </BrowserRouter>
      {/* <Home></Home> */}
    </div>
  );
}

export default App;
