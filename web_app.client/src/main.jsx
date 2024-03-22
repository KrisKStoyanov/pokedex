import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/home.jsx'
import Research from './pages/research.jsx';
import Community from './pages/community.jsx';
import Undefined from './pages/undefined.jsx';

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Undefined />
    },
    {
        path: "research",
        element: <Research />,
        errorElement: <Undefined />
    },
    {
        path: "community",
        element: <Community />,
        errorElement: <Undefined />
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={appRouter}/>
    </React.StrictMode>,
)
