import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/ConfigureStore';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/:id">
            <Details />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
