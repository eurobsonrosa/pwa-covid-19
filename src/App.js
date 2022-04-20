import React from "react";
import { StylesProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import GlobalStyle from "./commons/styles/global-style";

function App() {
  return (
    <div className="App">
      <StylesProvider injectFirst>
        <CssBaseline/>
        <GlobalStyle/>
        <div>
          true
          </div>
      </StylesProvider>
    </div>
  );
}

export default App;
