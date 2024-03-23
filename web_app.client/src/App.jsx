import './App.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from './pages/root.jsx'
import Research from './pages/research.jsx';
import Community from './pages/community.jsx';
import Undefined from './pages/undefined.jsx';
import Profile from './pages/profile';
import Layout from './components/layout';

const appRouter = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <Undefined />,
        children: [
            {
                path: "/",
                element: <Root />
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "research",
                element: <Research />
            },
            {
                path: "community",
                element: <Community />
            }
        ]
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
