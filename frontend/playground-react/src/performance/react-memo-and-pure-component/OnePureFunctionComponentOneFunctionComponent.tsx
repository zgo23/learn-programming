import React, { useState, Fragment } from "react";

interface Props {
  name: string;
}

const WelcomeMessage: React.FC<Props> = React.memo(({ name }) => {
  console.log("render WelcomeMessage");
  return <label>Hello {name}</label>;
});

interface User {
  name: string;
  age?: number;
}

const Page: React.FC = () => {
  const [user, setUser] = useState<User>({ name: "" });
  console.log("render Page");

  return (
    <Fragment>
      <WelcomeMessage name={user.name} />
      <button onClick={() => setUser({ name: "Jack", age: 42 })}>
        Set user
      </button>
    </Fragment>
  );
};

export default function Demo() {
  return <Page />;
}
