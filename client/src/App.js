import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBar';
import { BrowserRouter as Router} from 'react-router-dom';
import AnimateRoutes from './components/AnimateRoutes';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
    <div className="App">
      <MyNavBar />
      <AnimateRoutes />
      <Footer/>
    </div>
  </Router>
);
}

export default App;
