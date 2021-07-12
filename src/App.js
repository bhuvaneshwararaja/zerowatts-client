
import './App.css';
import LandingPage from './pages/landing';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        {/* <Route path="/" component={NavBar} /> */}
        <Route path="/home" exact component={Home} />
      </Switch>
    </Router>
   
  );
}

export default App;
