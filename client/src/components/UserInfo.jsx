import React from "react";
import { isAuthenticate, signout } from "../auth/index";
import { withRouter } from 'react-router-dom'

const UserInfo = (props) => {
  const { user } = isAuthenticate();

  return (
    <div className="card ms-5" style={{ width: "20rem" }}>
      <div className="card-header bg-primary text-light fs-5">
        User Information
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Name: {user.name}</li>
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">
          <button className="btn btn-primary" onClick={() => signout(() => {props.history.push('/')})}>
            Sign Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(UserInfo);
