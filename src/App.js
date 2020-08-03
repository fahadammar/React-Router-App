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
            <Route
              path="/products"
              render={(props) => <Products sortBy="newest" {...props} />}
            />
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

/*
***ROUTE PROPS***
<Route> is a wrapper around the component that we pass in it
<Route path="/" component={WrapperAroundThis-Component} &
injects the three route props
*1: history: {...}
*2: location: {...}
*3: match: {...}
? URL: https://reacttraining.com/react-router/web/api/match

* history: {...} object with use of it, we can send the user or go to the different page
* location: {...} which represents where the app is now
* match: {...} which contains the information that how this URL match the path we set in 
               the <Route>
*/

/*
***PASSING PROPS***
To pass the props in the component i.e <Products sortBy="newest" />
so how we do in the <Route> ??
we will use "render" instead of "component"
* <Render path="/products" render={(props) => <Products sortBy="newest" {...props} />}
we added the 'props' in the arrow-function, because if we don't add the props we will
see in the props of <Products> there will be only sortBy. So the three <Route> props will
disappear. So when we add props (as parameter or argument) in the arrow-function, react will automatically inject those three props there in (HereProps Injected) =>{}. we pass those props using special syntax in JSX  we pass an object here & use the spread operator to spread the props object. So this is something you can do in JSX with this syntax all the properties of the props object will be listed just like the custom prop (sortBy) we passed earlier.

* Special JSX syntax {...props}
*/
