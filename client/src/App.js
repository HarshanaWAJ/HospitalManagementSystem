import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBar';
import AdminDashboard from './pages/AdminDashboard';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="App">
      <MyNavBar/>
      <HomePage/>
      <AboutPage/>
      <AdminDashboard/>
    </div>
  );
}

export default App;
