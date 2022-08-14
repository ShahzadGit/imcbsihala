import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Footer from './components/Footer';
import Admissions from './components/Admissions';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Error from './components/Error';
import Programs from './components/Programs';
import Faculty from './components/Faculty';
import Facilities from './components/Facilities'
import About from './components/About'

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/admissions" element={<Admissions />}/>
        <Route path="/programs" element={<Programs />}/>
        <Route path="/faculty" element={<Faculty />}/>
        <Route path="/facilities" element={<Facilities />}/>
        <Route path="/about" element={<About />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
