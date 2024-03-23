import './App.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from './pages/home.jsx'
import Research from './pages/research.jsx';
import Community from './pages/community.jsx';
import Undefined from './pages/undefined.jsx';
import Profile from './pages/profile';


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Undefined />
    },
    {
        path: "profile",
        element: <Profile />,
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

function App() {
    
    return (
        <>
            <RouterProvider router={appRouter} />
        </>
    )
}

export default App
