import './App.css';
import { Route, Switch } from 'react-router-dom';
import Partners from './Screen/Partners';
import Landlord from './Screen/Landlord';



function App() {
  return (
    <Switch>
      
      <Route exact path='/' component={Partners}>
          <Partners />
      </Route>
      <Route path='/landlord'>
          <Landlord />
      </Route>
        
    </Switch>
  );
}

export default App;
