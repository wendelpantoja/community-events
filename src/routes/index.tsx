import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Events } from "../pages/Events";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dash";
import { CreateEvent } from "../pages/CreateEvent";
import { EventsDash } from "../pages/EventsDash";
import { FormUpdate } from "../pages/FormUpdate";
import { Event } from "../pages/Event";
import { About } from "../pages/About";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/events",
      element: <Events />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children:[
        {
          path: "/dashboard/create-event",
          element: <CreateEvent />
        },
        {
          path: "/dashboard/events-dash",
          element: <EventsDash />
        },
        {
          path: "/dashboard/update-event",
          element: <FormUpdate />
        }
      ]
    }, 
    {
      path: "/event/:id",
      element: <Event />
    }
  ]);