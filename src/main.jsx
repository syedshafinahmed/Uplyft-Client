import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';

import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import PrivateRoute from './privateroute/PrivateRoute.jsx';
import UpcomingEvents from './events/UpcomingEvents.jsx';
import CreateEvents from './events/CreateEvents.jsx';
import ManageEvents from './events/ManageEvents.jsx';
import JoinedEvents from './events/JoinedEvents.jsx';
import EventDetails from './events/EventDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/upcoming-events',
        element: <UpcomingEvents></UpcomingEvents>,
        loader: () => fetch('http://localhost:3000/events')
      },
      {
        path: '/create-event',
        element: <PrivateRoute><CreateEvents></CreateEvents></PrivateRoute>
      },
      {
        path: '/manage-events',
        element: <PrivateRoute><ManageEvents></ManageEvents></PrivateRoute>
      },
      {
        path: '/joined-events',
        element: <PrivateRoute><JoinedEvents></JoinedEvents></PrivateRoute>
      },
      {
        path: '/event-details/:id',
        element: <EventDetails></EventDetails>,
        loader: ({ params }) => fetch(`http://localhost:3000/events/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },

    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
