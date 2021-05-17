import "./App.css";
import { Layout } from "./Layout/index";
import { Redirect, Route, Switch, Router } from "react-router";
import { Home } from "./Home/index";
import { About } from "./About/index";
import { Treatments } from "./Treatments/index";
import { createBrowserHistory } from "history";
import { Dermal } from "./Treatments/dermal";
import { Wrinkle } from "./Treatments/wrinkle";
import { Hyperhidrosis } from "./Treatments/hyperhidrosis";
import { BeforeAfter } from "./Treatments/beforeafter";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const history = createBrowserHistory();

function App() {
  return (
    <div>
      <Router history={history}>
        <Layout>
          <ScrollToTop />
          <Switch>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/treatments/dermal-fillers">
              <Dermal />
            </Route>
            <Route path="/treatments/wrinkle-reduction-botox">
              <Wrinkle />
            </Route>
            <Route path="/treatments/hyperhidrosis-treatment">
              <Hyperhidrosis />
            </Route>
            <Route path="/treatments/before-after">
              <BeforeAfter />
            </Route>
            <Route path="/treatments" exact>
              <Treatments />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
