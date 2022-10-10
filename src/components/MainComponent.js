import React from "react";
import {
  Switch,
  Link,
  Route,
  BrowserRouter,
  withRouter
} from "react-router-dom";
import Main from "./Main";
import DataTablePage from "./DataTablePage";
import SiteNav, { ContentGroup } from "react-site-nav";
import "../styles/style.css";
import SignModal from "./Sign-in-modal";
import Footer from "./Footer";

export default function MainComponent() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <header>
          <div className="logo">
            <Link to="/">
              <img
                alt={"logo"}
                src={
                  "https://www.zutec.com/wp-content/uploads/2021/09/zutec-logo.svg"
                }
              />
            </Link>
          </div>
          <SiteNav color="#3F3F3F" background="#fff">
            <ContentGroup title="About" width="150" height="100">
              <ul>
                <li>
                  <Link to="/dataTablePage"> Table</Link>
                </li>
                <li>
                  <Link to="/link-2">Another Link</Link>
                </li>
              </ul>
            </ContentGroup>
            <ContentGroup title="Contact" width="150" height="200">
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:zutec@gmail.com"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/zutec"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/zutec"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://linkedin.com/in/zutec"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </ContentGroup>
            <ContentGroup title="My projects" width="150" height="100">
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/ChandanaNS/"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/chandana-ns/"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </ContentGroup>
            <ContentGroup title="Admin" width="200" height="60">
              <ul>
                <li>You can't access me</li>
              </ul>
            </ContentGroup>
            <ContentGroup title="Drawings" width="250" height="100">
              <ul>
                <li>Document Coordination</li>
                <li>Document Contro</li>
              </ul>
            </ContentGroup>
            <ContentGroup title="BIM" width="300" height="150">
              <ul>
                <li>Field BIM</li>
                <li>Project & Asset Information Model</li>
                <li>4D Progress Tracking</li>
              </ul>
            </ContentGroup>
          </SiteNav>
          <input
            type="button"
            value="Login"
            className="login"
            onClick={() => setShowModal(true)}
          />
          <SignModal show={showModal} hide={() => setShowModal(false)} />
        </header>

        <main>
          <div>
            <Switch>
              <Route exact path="/dataTablePage">
                <DataTablePage />
              </Route>
              <Route exact path="/" component={withRouter(Main)} />
            </Switch>
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
