import React, { Fragment } from "react";

interface Props {
  user: string;
}

class WelcomeMessage extends React.Component<Props> {
  render() {
    console.log("render WelcomeMessage");
    return <label>Hello {this.props.user} </label>;
  }
}

class Page extends React.PureComponent {
  state = { user: "" };

  render() {
    console.log("render Page");
    return (
      <Fragment>
        <WelcomeMessage user={this.state.user} />
        <button onClick={() => this.setState({ user: "Jack" })}>
          Set User
        </button>
      </Fragment>
    );
  }
}

export default function Demo() {
  return <Page />;
}
