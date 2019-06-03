import React from "react";

import Chat from "./pages/Chat";
import Login from "./pages/Login";

const Router = () => {
  const routers = [];
  routers["/chat"] = <Chat />;
  
  return routers[window.location.pathname] || <Login />;
 };

export default Router;