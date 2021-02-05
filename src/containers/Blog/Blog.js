import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

// import axios from "axios";
// import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import Nav from "../../Nav";
import "./Blog.css";

// lazy loading

// const Posts = React.lazy(() => import("./Posts/Posts"));

import asyncComponent from "../../hoc/asyncComponent";
const AsyncNewPost = asyncComponent(() => {
  return import("./NewPost/NewPost");
});

class Blog extends Component {
  state = {
    auth: true,
  };
  render() {
    return (
      <div className="Blog">
        <Nav />
        <Switch>
          {this.state.auth ? (
            <Route path="/new-post" component={NewPost} />
          ) : null}

          <Route path="/posts" exact component={AsyncNewPost} />
          <Redirect from="/" to="/posts" />
        </Switch>
      </div>
    );
  }
}

export default Blog;
