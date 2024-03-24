import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from './pages/home.jsx'
import Undefined from './pages/undefined.jsx';
import Profile from './pages/profile';
import About from './pages/about';
import Contact from './pages/contact';

const appRouter = createBrowserRouter([
    {
        element: <App />,
        errorElement: <Undefined />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={appRouter} />
    </React.StrictMode>,
)
