import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import DJSets from "./pages/DJSets";
import Shows from "./pages/Shows";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "songs", Component: Songs },
      { path: "dj-sets", Component: DJSets },
      { path: "shows", Component: Shows },
      { path: "contact", Component: Contact },
    ],
  },
]);
