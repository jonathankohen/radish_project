// Router
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

// Components
import Navbar from './components/layout/Navbar';
// import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import CountryPage from './pages/CountryPage';

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
                        {/* <Redirect to="/countries" /> */}
                    </Route>

                    {/* <Route path="/countries">
                        <Home />
                    </Route> */}

                    <Route path="/countries/:name">
                        <CountryPage />
                    </Route>
                </Switch>
                {/* <Footer /> */}
            </Router>
        </div>
    );
}

export default App;
