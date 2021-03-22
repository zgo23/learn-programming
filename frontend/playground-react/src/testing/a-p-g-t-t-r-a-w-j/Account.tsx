import React from "react";
import { User } from "./types";

const style = {
  width: "15rem",
  margin: "2rem 0rem 0rem 15rem",
};

interface Props {
  user: User;
}

const Account: React.FC<Props> = ({ user }) => {
  return (
    <React.Fragment>
      <div key={user.username} style={style}>
        <h4>{user.name}</h4>
        <p>{user.email}</p>
        <hr />
      </div>
    </React.Fragment>
  );
};

export default Account;
