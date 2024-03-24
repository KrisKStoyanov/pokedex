import './App.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from './pages/root.jsx'
import Undefined from './pages/undefined.jsx';
import Profile from './pages/profile';
import Layout from './components/layout';
import About from './pages/about';
import Contact from './pages/contact';

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

function App() {
    
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default App
