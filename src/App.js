import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Navbar } from "./components/Navbar/Navbar";
import {AddBook} from './components/book/Addbook'
import {Books} from './components/book/Books'
import { RegisterUser } from './components/users/RegisterUser';
import { LoginUser } from './components/users/LoginUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/books' component={Books} />
          <Route exact path='/addbook' component={AddBook} />
          <Route exact path='/register' component={RegisterUser} />
          <Route exact path='/login' component={LoginUser} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
