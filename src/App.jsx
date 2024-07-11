// frontend/src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestComponent from "./components/TestComponent";
import Login from './components/accounts-login/Login';
import Register from './components/accounts-login/Register';
import CreateEvent from './components/Events/CreateEvent';
import CreateAccount from "./components/accounts-login/CreateAccount";
import EventPage from "./components/Events/EventPage";
import AccountPage from "./components/Account/AccountPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TestComponent />} exact />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/eventsP/*" element={<EventPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
