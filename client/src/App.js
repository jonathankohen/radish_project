// Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Details from './pages/Details';

// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/index.scss';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/countries/:name">
                        <Details />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;

// TO DO:
// add icons
// make sure it's responsive
// organize Sass
// deploy
