import * as React from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  height: 100%;
  background: ${props => props.theme.colorBackground};
  color: ${props => props.theme.colorTextDefault};
`;

class Counter extends React.Component<{}, { count: number }> {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  public render() {
    return (
      <div>
        <button onClick={this.handleClick}>click</button>
        <div>{this.state.count}</div>
      </div>
    );
  }

  private handleClick = e => {
    this.setState({ ...this.state, count: this.state.count + 1 });
  };
}

const App = () => (
  <AppContainer>
    <Counter />
    <Counter />
    <div>Change me and watch me hot reload</div>
  </AppContainer>
);
export default App;
