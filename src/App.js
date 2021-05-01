
import './App.css';
import Number from './components/Number';
import Home from './components/Home';
import Sign_up from './components/Sign_up';
import Sign_in from './components/Sign_in';
import {BrowserRouter,Route} from "react-router-dom";
import PostForm from './components/PostForm';
import Display from './components/Display';
import SignInHome from './components/signInHome';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/number" component={Number}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signIn" component={Sign_in}/>
        <Route exact path="/signUp" component={Sign_up}/>
        <Route exact path="/register" component={PostForm}/>
        <Route exact path="/display" component={Display}/>
        <Route exact path="/signInHome" component={SignInHome}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
