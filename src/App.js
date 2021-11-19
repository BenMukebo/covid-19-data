import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';
import Home from './components/home/Home';
import Details from './components/home/Details';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/country/:name',
    name: 'Details',
    component: Details,
  },
];

const App = () => (
  <Router>
    <LoadingBar className="App-loading-bar" />
    <Switch>
      {routes.map(({ path, component }) => (
        <Route key={path} exact path={path} component={component} />
      ))}
    </Switch>
  </Router>
//   <Router>
//     <LoadingBar className="App-loading-bar" />
//     <Switch>
//       <Route path="/" exact>
//         <Home />
//       </Route>
//       <Route path="/country/:name">
//         <Details />
//       </Route>
//     </Switch>
//   </Router>
);

export default App;
