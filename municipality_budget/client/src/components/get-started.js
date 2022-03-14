import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import UserTypeChooser from './Auth/usertypechooser';
import Login from './Auth/login';
import Register from './Auth/register';
import Treasury from './UserTypeView/Treasury';
import Municipality from './UserTypeView/Municipality';
import ServiceProvider from './UserTypeView/ServiceProvider';
import Community from './UserTypeView/Community';

export default function GetStarted() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" >
              	<Route index element={<UserTypeChooser />} />
                <Route path="treasury" element={<Treasury />} />
                <Route path="local-municipality" element={<Municipality />} />
                <Route path="service-provider" element={<ServiceProvider />} />
                <Route path="community" element={<Community />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    </BrowserRouter>
  )
}

