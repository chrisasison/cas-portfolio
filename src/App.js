import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from './components/nav/Nav';
import Banner from './components/banner/Banner';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Poster from './components/poster/Poster';



function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Nav />
            <Banner />
            <About />
            <Footer />
          </Route>
          <Route path="/portfolio">
            <Nav />
            <Poster />
            <Footer />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
