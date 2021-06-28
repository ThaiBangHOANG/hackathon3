import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login/index';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
