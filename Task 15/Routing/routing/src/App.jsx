import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Company from "./pages/Company"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <NavBar /><Home /></>
    },
    {
      path: "/about",
      element: <>
        <NavBar /><About /></>
    },
    {
      path: "/contact",
      element: <>
        <NavBar /><Contact /></>
    },
    {
      path: "/company/:companyname",
      element: <>
        <NavBar /> <Company /></>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
