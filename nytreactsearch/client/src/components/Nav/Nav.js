import React from "react";

const Nav = () =>
  <nav className="navbar navbar-default navbar-top">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> 
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active"><a href="/">Home <span class="sr-only">(current)</span></a></li>
          <li><a href="/saved">Saved Articles</a></li>
        </ul>
      </div>
  </nav>;

export default Nav;
