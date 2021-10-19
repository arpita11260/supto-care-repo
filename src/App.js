import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Booking from './Pages/Booking/Booking';
import NotFound from './Pages/Home/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Login from './Pages/Login/Login';
import PrivateRoute from '../src/Private/PrivateRouter'
import AboutUs from './Pages/Home/About Us/AboutUs';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/aboutus'>
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/login">
              <Login></Login>
            </Route>
          <PrivateRoute path='/booking/:description'>
            <Booking></Booking>
          </PrivateRoute>
          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
