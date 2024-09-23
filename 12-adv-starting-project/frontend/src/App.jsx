import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage, { loader } from "./pages/Events";
import EventDetailPage, {
  loader as eventDetailsLoader,
} from "./pages/EventDetail";
import EditEventPage from "./pages/EditEvent";
import NewEventPage from "./pages/NewEvent";
import RootPage from "./pages/Root";
import EventsRootLayout from "./pages/EventsRoot";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            path: "",
            element: <EventsPage />,
            loader: async () => loader(),
          },
          { path: "new", element: <NewEventPage /> },
          {
            path: ":eventId",
            element: <EventDetailPage />,
            loader: eventDetailsLoader,
          },
          { path: ":eventId/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
