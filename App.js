import React from "react"
import ReactDOM from "react-dom/client"
import Homepage from "./Homepage"
import {RouterProvider,createBrowserRouter} from "react-router"
import Welcome from "./Welcome"
const root=ReactDOM.createRoot(document.getElementById("root"))
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<Welcome/>
    },{
         path:"/homepage",
        element:<Homepage />,
    }

])

root.render(<RouterProvider router={appRouter}/>)

