// frontend/src/App.jsx
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent";
import Login from './components/accounts-login/Login';
import Register from './components/accounts-login/Register';
import CreateEvent from './components/Events/CreateEvent';
import EventList from './components/Events/EventList';
import RegisterEvent from './components/Events/RegisterEvent';
import EventRegistrations from './components/Events/EventRegistrations';
import CreateAccount from "./components/accounts-login/CreateAccount";
import EventPage from "./components/Events/EventPage";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={TestComponent} exact />
          <Route path="/login" component={Login} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/register" component={Register} />
          <Route path="/create-event" component={CreateEvent} />
          <Route path="/events" component={EventList} exact />
          <Route path="/eventsP" component={EventPage} exact />
          <Route path="/events/:id/register" component={RegisterEvent} />
          <Route path="/events/:id/registrations" component={EventRegistrations} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
