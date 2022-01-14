import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import UserPage from "./pages/UserPage";
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Navigate to = "/signin"/>}/>
      <Route path = "/signin" element = {<SignInPage/>}/>
      <Route path = "/signup" element = {<SignUpPage/>}/>
      <Route path = "/mainpage" element = {<UserPage/>}/>
      <Route path = "*" element = {<Navigate to = "/signin"/>}/>
    </Routes>
  );
}

export default App;
