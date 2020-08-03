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
            <Route path="/products/:id" component={ProductDetails} />
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
               * the <Route> also the route parameters
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
/*
***ROUTE PARAMETERS***
https://xyz.com/products/1 here the /1 is the route paramter. So to pass the route
parameter /products/:id here the id after the colon ':' is the route parameter. We
can pass many route parameters /products/:id/:price so we should order the paths with
the route parameters above the other paths without route parameters because the paths
with parameters are more specific. The route parameters can be found in props match: {...}
having params object which contains the property i.e /products/:id so we passed /products/1
so 
params:{...}
      id: 1
the 1 for the id is coming from the URL
So we can read the route paramters passed to a component using this match: {...} object
----------------------------------------------------------
***OPTIONAL PARAMETERS***
NOTE: when we define the route parameters by default they are required
If we do not provide all the route parameters in the URL, we will get HOME '/' because
the route parameters are not fully provided hence, path matches only '/'
So we need to append '?' question-mark with the parameters to make them optional
i.e /posts/:year?/:month?
This is the part of the regular expressions in javaScript in regular expressions when you
append question-mark '?' to an expression it means that expression is optional.
*/
