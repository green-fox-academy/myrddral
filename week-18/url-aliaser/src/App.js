import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aliaser from "./components/Aliaser";
import Redirect from "./components/Redirect";
import firebase from "firebase";
import "./custom.scss";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAAcG2szWSTyBRfoGkF1iSdN81dulTztd8",
  authDomain: "url-aliaser-303f8.firebaseapp.com",
  projectId: "url-aliaser-303f8",
  storageBucket: "url-aliaser-303f8.appspot.com",
  messagingSenderId: "344400370169",
  appId: "1:344400370169:web:78108c3f91eb81f1550528"
  });

export const db = app.firestore();

function App() {
  return (
    <>
      <Router>
        <Switch>
            <Route exact path="/">
              <Aliaser />
            </Route>
            <Route path="/a/:alias">
              <Redirect />
            </Route>
            <Route path="/remove/:alias/:secretCode">
              <Redirect />
            </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
