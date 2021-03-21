import React, { useState, Fragment } from "react";

interface Props {
  user: string;
}

const WelcomeMessage: React.FC<Props> = ({ user }) => {
  console.log("render WelcomeMessage");
  return <label>Hello {user}</label>;
};

const Page: React.FC = () => {
  const [user, setUser] = useState<string>("");
  console.log("render Page");

  return (
    <Fragment>
      <WelcomeMessage user={user} />
      <button onClick={() => setUser("Jack")}>Set user</button>
    </Fragment>
  );
};

export default function Demo() {
  return <Page />;
}
