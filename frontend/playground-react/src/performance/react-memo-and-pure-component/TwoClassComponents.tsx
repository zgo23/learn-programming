import React, { Fragment } from "react";

interface Props {
  user: string;
}

class WelcomeMessage extends React.Component<Props> {
  render() {
    console.log("render WelcomeMessage");
    return <label>Hello {this.props.user} </label>;
  }

  shouldComponentUpdate(nextProps: Props, nextState: any) {
    console.log(`Compare props equality: ${this.props === nextProps}`);
    return true;
  }
}

class Page extends React.Component {
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

  shouldComponentUpdate(nextProps: any, nextState: any) {
    console.log(`Compare state equality: ${this.state === nextState}`);
    return true;
  }
}

export default function Demo() {
  return <Page />;
}
