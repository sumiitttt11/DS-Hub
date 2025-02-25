import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DSSA from './pages/DSSA';
import Faculty from './pages/Faculty';
import Resources from './pages/Resources';
import Community from './pages/Community';
import AdminPage from './pages/AdminPage';
import Team from './pages/Team';

function App() {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<><Home /><Footer /></>} />
            <Route path="/dssa" element={<DSSA />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/team" element={<Team />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/community" element={<Community />} />
            <Route path="/adminpage" element={<AdminPage />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
