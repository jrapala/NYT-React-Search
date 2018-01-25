import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";

const App = () => 

	<Router>
	    <div>
	   		<Nav />
	      	<Switch>
	        	<Route path="/" component={Home} />
	        	<Route exact path="/saved" component={Saved} />
	      	</Switch>
	    </div>
	</Router>;

export default App;


