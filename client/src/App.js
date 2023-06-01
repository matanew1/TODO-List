import './App.css';
import Home from './components/pages/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home/profile/prof/search" element={<Professionals />} />
                <Route path="/home/profile/prof/search/result" element={<SearchResultProf />} />
              </Routes>
              <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
