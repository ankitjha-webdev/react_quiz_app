
import {Route, Switch} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup'
import Home from './components/Home';
import Error from './components/Error';
import Forgetpass from './components/Forgetpass';

const App = () => {
  
  return (
    <div className="App">
     

<Switch>
  <Route exact path="/" component={Login} />
  <Route exact path="/login" component={Login} />
  <Route path="/home" component={Home} />
  <Route path="/signup" component={Signup} />
  <Route path="/passforget" component={Forgetpass}/>
  <Route component={Error} />
</Switch>
     
    </div>
    
  );
}

export default App;
