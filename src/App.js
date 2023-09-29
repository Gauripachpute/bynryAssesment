import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProfileList from "./components/ProfileList";
import ProfileMap from "./components/ProfileMap";
import profilesData from "./data/profiles.json";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={() => <ProfileList profiles={profilesData} />} />
          {/* Define a route for ProfileMap that captures route parameters */}
          <Route
            path="/map/:profileId/:latitude/:longitude"
            component={ProfileMap}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
