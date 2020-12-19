import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Projects from './pages/projects';
import Aboutme from './pages/aboutme';

import Navbar from './components/navbar';
import Footer from './components/footer';

import "./App.css"

function App() {
  return (
    <div className="web-body">
      <BrowserRouter>
        <Navbar />
        <div id="content">
          <div className="container">
            <Switch>
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/aboutme" component={Aboutme} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;