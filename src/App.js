import React, { Component } from 'react';
import NavBar from './components/navbar';
import { Route, Switch } from 'react-router-dom';
import Products from './components/products';
import Posts from './components/posts';
import Home from './components/home';
import Dashboard from './components/admin/dashboard';
import ProductDetails from './components/productDetails';
import NotFound from './components/notFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/products" component={Products} />
            <Route path="/posts" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

/*
exact is one solution <Route path="" exact component{} />
<Switch></Switch> is another solution. It matches the route. The one matched, rest are ignored.
So in switch, first place the specific ones and at last the general(s) one(s).
*/

/*
Using the Link, we changed this app to SPA (Single Page Application). 
In SPA when user navigate from one page to another, the entire reloading whole page with its
assets it only updates what we have in the content area.

The Link itself have the anchor in it, with a function that removes the default behaviour of
anchor (tag). You can check it via going to React tab (in console of browser)
*/
