import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import FullPost from "../FullPost/FullPost";
import Post from "../../../components/Post/Post";
import axios from "../../../axios";
import "./Posts.css";
class Posts extends Component {
  state = {
    post: [],
  };
  componentDidMount() {
    axios
      .get("/posts")
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatePosts = posts.map((post) => {
          return {
            ...post,
            author: "Harry",
          };
        });
        this.setState({ post: updatePosts });
      })
      .catch((error) => {
        console.log(error);
        // this.setState({ error: true });
      });
  }
  postSelectedHandler = (id) => {
    this.setState({ selectedId: id });
  };
  render() {
    let posts = (
      <p style={{ textAlign: "center", color: "red" }}>Somthings went wrong!</p>
    );
    if (!this.state.error) {
      posts = this.state.post.map((post) => {
        return (
          <Link to={"/posts/" + post.id} key={post.id}>
            <Post
              title={post.title}
              author={post.author}
              clicked={() => this.postSelectedHandler(post.id)}
            />
          </Link>
        );
      });
    }
    return (
      <div>
        <section className="Posts">{posts}</section>;
        <Route path={this.props.match.url + "/:id"} component={FullPost} />
      </div>
    );
  }
}

export default Posts;
