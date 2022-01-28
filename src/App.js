import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navbar } from "./components/Navbar/Navbar";
import { AddBook } from './components/book/Addbook'
import { Books } from './components/book/Books'
import { RegisterUser } from './components/users/RegisterUser';
import { LoginUser } from './components/users/LoginUser';
import { Home } from './components/Home/Home';
import { Profile } from './components/profile/Profile';
import { UpdateProfile } from './components/UpdateProfile/UpdateProfile';
import { Bookslibrary } from './components/book/BookLibrary';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={LoginUser} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/user-update' component={UpdateProfile} />
          <Route exact path='/books' component={Books} />
          <Route exact path='/book-library' component={Bookslibrary} />
          <Route exact path='/addbook' component={AddBook} />
          <Route exact path='/register' component={RegisterUser} />   
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
