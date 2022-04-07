import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/navBar.js';
import Friends from './components/friends.js';
import AddFriend from './components/addFriend.js';
import AllFriends from './components/allFriends.js';
import notFound from './components/notFound.js';
import { BrowserRouter  ,Route, Switch  } from 'react-router-dom';
import EditUser from './components/editFriend.js';
const Routing =()=>{
  return(
<Switch>
   <Route  exact path='/' component={Friends} />
   <Route exact path='/add' component={AddFriend} />
   <Route  exact path='/all' component={AllFriends} />
   <Route exact path='/edit/:id' component={EditUser} />
   <Route component={notFound}/>
    </Switch>
  )
}

const App = ()=>{
  return (
    <BrowserRouter>
      <NavBar />
      <Routing/>
    </BrowserRouter>
  )
}
export default App;
