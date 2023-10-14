import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import CartPage from "./components/pages/CartPage";
import React from "react";
import Layout from "./components/ui/layout/Layout";
import locations from "./locations";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={locations.rootPath} element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path={locations.cartPath} element={<CartPage/>}/>
        </Route>
    )
);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
