import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Footer from "./common/Footer";
import Header from "./common/Header";
import FileUpload from "./components/FileUpload";
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";


const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Registration /> },
    { path: "/upload", element: <FileUpload /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <>   
    <Router>
      <Header/>
      <App />
      <Footer />
    </Router>
    </>
  );
};

export default AppWrapper;