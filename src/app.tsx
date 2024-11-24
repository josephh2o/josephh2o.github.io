import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/home';
import Resume from './pages/resume';
import Ideas from './pages/ideas';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import './css/index.css';

const App: React.FC = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/ideas" element={<Ideas />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
