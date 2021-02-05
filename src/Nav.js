import React from "react";

import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: "/new-post",
                hash: "submit",
                search: "?quick-submit=true",
              }}
            >
              New Post
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
