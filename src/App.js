import './App.css';
import Home from './components/Home'
import About from './components/About'
import FAQ from './components/FAQ'
import Store from './components/Store'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">   
      <Router>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/faq">F.A.Q</Link>
        <Link className="link" to="/store">Store</Link>
          
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
