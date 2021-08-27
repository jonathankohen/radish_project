// Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Navbar from './components/layout/Navbar';

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
            </Router>
        </div>
    );
}

export default App;

// TODO:

// if there's time:
// make a more accurate dropdown
// organize Sass
// moon icon on switch
