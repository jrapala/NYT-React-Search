import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";

const App = () => 

	<Router>
	    <div>
	   		<Nav />
	      	<Switch>
	        	<Route exact path="/saved" component={Saved} />
	        	<Route path="/" component={Home} />
	      	</Switch>
	    </div>
	</Router>;

export default App;


