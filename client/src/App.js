import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBar';
import AdminDashboard from './pages/AdminDashboard';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <MyNavBar/>
      <HomePage/>
      <AboutPage/>
      <Contact/>
      <AdminDashboard/>
    </div>
  );
}

export default App;
