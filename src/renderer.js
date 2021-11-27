/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MemoryRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import "./fonts/stylesheet.css";
import Page3 from "./pages/Page3";
import Page2 from "./pages/Page2";
import Page1 from "./pages/Page1";
import Waves from "./components/Waves";

function App() {
  return (
    <>
      <Waves />
      <Router>
        <Switch>
          <Route exact path="/" component={Page1} />
          <Route exact path="/2" component={Page2} />
          <Route exact path="/3" component={Page3} />
        </Switch>
      </Router>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
