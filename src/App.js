import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Housing from './pages/Housing';
import Error from './pages/Error';

import housingServices from "./services/logement.service";

function App() {
    const router = createBrowserRouter([
        {
            path: "*",
            element: <Error number="404" />,
        },
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/housing/:id",
            element: <Housing />,
            loader: ({ params }) => {
                const currentHouse = housingServices.getOneHousing(params.id);

                if (currentHouse === "") {
                    throw new Error();
                }

                return currentHouse;
            },
            errorElement: <Error number="404" />,
        },
    ]);

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}

export default App
