import React, { lazy, Suspense } from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider, useSelector } from "react-redux";
import appStore from "./utils/AppStore";
import {useState,useEffect,useContext}  from "react";
import UserContext from "./components/userContext";
import Cart from "./components/Cart";


const App = () => 
{

    const[userName,setUserName] = useState();

    //authentication
    useEffect(()=>{
        const data =  {
            name:"Arpit Beuria"
        }
        setUserName(data.name);
    },[])


    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName, setUserName}} >
            <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
          </div>

            </UserContext.Provider>
            

        </Provider>
        
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />, // Directly use the component
            },
            {
                path: "/about",
                element: <About />, // Directly use the component
            },
            {
                path: "/contact",
                element: <Contact />, // Directly use the component
            },
            {
                path: "restaurants/:resId",
                element: <RestaurantMenu />, // Directly use the component
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ],
        errorElement:<Error/>
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
