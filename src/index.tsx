import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { BrowserRouter as Router } from "react-router-dom";
import { injectGlobal, ThemeProvider } from "styled-components";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

const theme = {
  colorBackground: "whitesmoke",
  colorTextDefault: "darkslategray"
};

// tslint:disable-next-line:no-unused-expression
injectGlobal`
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  height: 100%;
}
html,
#root {
  height: 100%;
}
`;

const render = component => {
  ReactDOM.render(
    <AppContainer>
      <Router>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Router>
    </AppContainer>,
    document.getElementById("root")
  );
};

if (module.hot) {
  module.hot.accept();
}

render(App);

registerServiceWorker();
