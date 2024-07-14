import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Main/Navbar';
import TestComponent from './components/Main/TestComponent';
import Login from './components/accounts-login/Login';
import CreateEvent from './components/Events/CreateEvent';
import CreateAccount from './components/accounts-login/CreateAccount';
import EventPage from './components/Events/EventPage';
import AccountPage from './components/Account/AccountPage';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<TestComponent />} exact />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/create-event" element={<PrivateRoute element={CreateEvent} />} />
          <Route path="/eventsP/*" element={<PrivateRoute element={EventPage} />} />
          <Route path="/account" element={<PrivateRoute element={AccountPage} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
