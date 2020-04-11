import React, { Component } from 'react';
import './App.css';
import { Router, Switch, Route} from 'react-router-dom';
import  { Login } from './login';
import { Home } from './home';
import { history } from './_helpers';
import { PrivateRoute } from './_components';
import {Room } from './rooms/room.component';
import { AddRoom } from './rooms/addroom.component';
import {Event } from './events/event.component';
import {Chat } from './chats/chat.component';


class App extends Component {
    render() {
       return (
           <div className="App">
               <Router history={history}>
                 <div>
                     <Switch>
                        <PrivateRoute exact path='/home' component={Home} />
                        <PrivateRoute exact path='/room' component={Room} />
                        
                        <PrivateRoute exact path='/add-room' component={AddRoom} />
                        <PrivateRoute exact path='/edit-room/:id' component={AddRoom} />
                        <PrivateRoute exact path='/events' component={Event} />
                        <PrivateRoute exact path='/chats' component={Chat} />

                        <Route exact path='/' component={Login} />
                     </Switch>
                 </div>
               </Router>
           </div>
        );
     }
}
export default App;
