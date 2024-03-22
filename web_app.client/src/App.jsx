import { useEffect, useState } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import Research from "./pages/research";
import Community from "./pages/community";
import Undefined from "./pages/undefined";

function NavMenu() {
    return (
        <>
            <div id="navmenu">
                <nav>
                    <ul>
                        <li>
                            <Link to={'/Home'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/Research'}>Research</Link>
                        </li>
                        <li>
                            <Link to={'/Community'}>Community</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
function App() {
    return (
        <>
            <div className="App">
                <NavMenu />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='Research' element={<Research />} />
                    <Route path='Community' element={<Community />} />
                </Routes>
            </div>
        </>
    );
}

export default App;