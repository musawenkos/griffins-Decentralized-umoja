import React, {useState} from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import UserTypeChooser from './Auth/usertypechooser';
import Treasury from './UserTypeView/Treasury';
import Municipality from './UserTypeView/Municipality';
import ServiceProvider from './UserTypeView/ServiceProvider';
import Community from './UserTypeView/Community';

export default function GetStarted() {
  const [isLogin, handleIsLogin] = useState(true);
  const [showView, handleShowView] = useState(true);

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" >
              	<Route index element={<UserTypeChooser />} />
                <Route path="treasury" element={<Treasury handleIsLogin={handleIsLogin} isLogin={isLogin} handleShowView={handleShowView} showView={showView}/>} />
                <Route path="local-municipality" element={<Municipality handleIsLogin={handleIsLogin} isLogin={isLogin} handleShowView={handleShowView} showView={showView}/>} />
                <Route path="service-provider" element={<ServiceProvider handleIsLogin={handleIsLogin} isLogin={isLogin} handleShowView={handleShowView} showView={showView} />} />
                <Route path="community" element={<Community />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

