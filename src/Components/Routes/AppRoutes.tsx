// import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { allroutes } from './RoutesData';
const AppRoutes = () => {
  return (
    <BrowserRouter>
         <Routes>
               {allroutes.map(({path,Component}) => {
                return <Route path={path} key={path} Component={Component} />
               })}
         </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
