import { Fragment, Component } from "react";

class ErrorBoundries extends Component {
  constructor() {
    super();
    this.state = {
      isError: false,
    };
  }
  componentDidCatch(error) {
    this.setState((prevState) => ({ isError: true }));
  }
  render() {
    if(this.state.isError) return <p>Users Not Found</p> 
    return <Fragment>{this.props.children}</Fragment>;
  }
}

export default ErrorBoundries